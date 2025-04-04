import React, { useState } from "react";
import axios from "axios"; // Import axios for Cloudinary upload
import "../style/adminpage.css";
import file from "../assets/file.png";
import logo from "../assets/logo.png";
import Pop from "../components/Pop";
import API from "../api";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    certificateNumber: "",
    certificateHolder: "",
    year: "",
    role: "",
    company: "",
    country: "",
    image: null, 
    juryName: "",
    juryImage: null,
    blogContent: "",
  });

  const [errors, setErrors] = useState({});
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;


  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };


  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files.length) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };
  

  const validateForm = () => {
    let newErrors = {};
    if (!formData.candidateName.trim()) newErrors.candidateName = "Candidate name is required.";
    if (!formData.certificateNumber.trim()) newErrors.certificateNumber = "Certificate number is required.";
    if (!formData.certificateHolder.trim()) newErrors.certificateHolder = "Certificate holder is required.";
    if(!formData.role.trim()) newErrors.role = "Role is required";
    if(!formData.company.trim()) newErrors.company = "Company is required";
    if(!formData.year.trim()) newErrors.year = "Year of collection is required";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.image) newErrors.image = "Candidate image is required.";
    if (!formData.juryName.trim()) newErrors.juryName = "Jury’s name is required.";
    if (!formData.juryImage) newErrors.juryImage = "Jury’s image is required.";
    if (!formData.blogContent.trim()) newErrors.blogContent = "Blog content is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    console.log("Form Data Before Sending:", formData);
  
    setLoading(true);
  
    // Create a new FormData object to send the file data
    const formDataToSend = new FormData();
    formDataToSend.append("candidateName", formData.candidateName);
    formDataToSend.append("certificateNumber", formData.certificateNumber);
    formDataToSend.append("certificateHolder", formData.certificateHolder);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("blogContent", formData.blogContent);
    formDataToSend.append("juryName", formData.juryName);
    
    // Append image files if they exist
    if (formData.image) {
      formDataToSend.append("image", formData.image); // File object, not URL
    }
    if (formData.juryImage) {
      formDataToSend.append("juryImage", formData.juryImage); // File object, not URL
    }
  
    try {
      // Send FormData to backend (to  handle Cloudinary upload)
      const response = await axios.post(`${API_URL}/auth/winners`, formDataToSend, { 
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("API Response:", response);
  
      if (response.status === 201) {
        setIsPublished(true);
      }
    } catch (error) {
      console.error("Error publishing data:", error);
      setErrors("Failed to load winners.");
    } finally {
      setLoading(false);
    }
  };
  

  if (isPublished) return <Pop />;
  return (
    <div className="adminpage">
      <div id="admin-header">
        <img src={logo} alt="Logo" />
        <button className="btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
      <form id="adminpage" onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className="admin-info-one">
          <h2>Candidate Information</h2>
          <input
            type="text"
            name="candidateName"
            placeholder="Enter candidate name"
            value={formData.candidateName}
            onChange={handleChange}
          />
          {errors.candidateName && <small className="error">{errors.candidateName}</small>}

          <input
            type="text"
            name="certificateNumber"
            placeholder="Enter certificate number"
            value={formData.certificateNumber}
            onChange={handleChange}
          />
          {errors.certificateNumber && <small className="error">{errors.certificateNumber}</small>}

          <input
            type="text"
            name="certificateHolder"
            placeholder="Enter certificate holder"
            value={formData.certificateHolder}
            onChange={handleChange}
          />
          {errors.certificateHolder && <small className="error">{errors.certificateHolder}</small>}

          <input
            type="text"
            name="year"
            placeholder="Enter year holder"
            value={formData.year}
            onChange={handleChange}
          /> <br />
          {errors.certificateHolder && <small className="error">{errors.year}</small>}

          <input
            type="text"
            name="company"
            placeholder="Enter company holder"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.certificateHolder && <small className="error">{errors.company}</small>}
          <input
            type="text"
            name="role"
            placeholder="Enter role"
            value={formData.role}
            onChange={handleChange}
          /> <br />
          {errors.certificateHolder && <small className="error">{errors.role}</small>}


          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <small className="error">{errors.country}</small>} <br />

          <div className="admin-image">
            <img src={file} alt="Upload" />
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
          </div>
          <small>Images Max. 15MB</small>
          {errors.image && <small className="error">{errors.image}</small>} <br /><br />

          <h6>Jury’s Details</h6>
          <input
            type="text"
            name="juryName"
            placeholder="Jury’s Name"
            value={formData.juryName}
            onChange={handleChange}
          />
          {errors.juryName && <small className="error">{errors.juryName}</small>} <br />

          <div className="admin-image">
            <img src={file} alt="Upload" />
            <input type="file" name="juryImage" accept="image/*" onChange={handleFileChange} />
          </div>
          <small>Images Max. 15MB</small>
          {errors.juryImage && <small className="error">{errors.juryImage}</small>}
        </div> <br />
        <div className="admin-info-two">
          <h2>Blog’s Information</h2>
          <textarea
            name="blogContent"
            placeholder="Enter blog content..."
            value={formData.blogContent}
            onChange={handleChange}
          /> <br />
          {errors.blogContent && <small className="error">{errors.blogContent}</small>}
        </div>
      </form>
    </div>



  );
};

export default AdminPage;
