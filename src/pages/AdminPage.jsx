import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/adminpage.css";
import file from "../assets/file.png";
import logo from "../assets/logo.png";
import Pop from "../components/Pop";
import { countries } from "countries-list";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";

const AdminPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  const {state} = useLocation();

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

  const countryNameToCode = Object.entries(countries).reduce((acc, [code, country]) => {
    acc[country.name.toLowerCase()] = code;
    acc[country.name] = code;
    return acc;
  }, {});

  const [errors, setErrors] = useState({});
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (state?.user) {
      setFormData({
        ...state.user,
        image: null, 
        juryImage: null,
      });
    }
  }, [state]);

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

// Form validation
const validateForm = () => {
  const newErrors = {};
  const requiredFields = [
    "candidateName",
    "certificateNumber",
    "certificateHolder",
    "year",
    "role",
    "company",
    "country",
    "juryName",
    "blogContent",
  ];

  requiredFields.forEach((field) => {
    if (!formData[field]?.trim()) {
      newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`;
    }
  });

  if (!state?.user && !formData.image) newErrors.image = "Image is required.";
  if (!formData.juryImage) newErrors.juryImage = "Jury image is required.";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);
  const formDataToSend = new FormData();

  
  const { image, juryImage, ...otherData } = formData;
  Object.entries(otherData).forEach(([key, value]) => {
    formDataToSend.append(key, value);
  });

  
  if (image) formDataToSend.append('image', image);
  if (juryImage) formDataToSend.append('juryImage', juryImage);

  try {
    const url = state?.user
      ? `${API_URL}/auth/winners/${state.user._id}`
      : `${API_URL}/auth/winners`;

    const response = await axios({
      method: state?.user ? 'put' : 'post',
      url,
      data: formDataToSend,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (response.data.status === 'success') {
      setIsPublished(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  } catch (error) {
    console.error('Error:', {
      status: error.response?.status,
      message: error.response?.data?.message
    });
    setErrors({
      submit: error.response?.data?.message || 'Update failed'
    });
  } finally {
    setLoading(false);
  }
};


  if (isPublished) return <Pop />;

  return (
    <div className="adminpage">
      <div id="admin-header">
        <Link to="/winner">
          <img src={logo} alt="Company Logo" />
        </Link>
        <button className="btn btn-war" onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : isEdit ? "Update" : "Publish"}
        </button>
      </div>
      <form id="adminpage" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="admin-info-one">
        <h3>{state?.user ? "Edit Winner" : "Create New Winner"}</h3>
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
          {errors.year && <small className="error">{errors.year}</small>}

          <input
            type="text"
            name="company"
            placeholder="Enter company holder"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && <small className="error">{errors.company}</small>}

          <input
            type="text"
            name="role"
            placeholder="Enter role"
            value={formData.role}
            onChange={handleChange}
          /> <br />
          {errors.role && <small className="error">{errors.role}</small>}

          <input
            type="text"
            name="country"
            placeholder="Country (e.g., Nigeria)"
            value={formData.country}
            onChange={(e) => {
              const countryName = e.target.value;
              const isoCode = countryNameToCode[countryName.toLowerCase()] || countryName.toUpperCase();
              setFormData({
                ...formData,
                country: isoCode,
              });
            }}
          />
          {errors.country && <small className="error">{errors.country}</small>}

          <div className="admin-image">
            <img src={file} alt="Upload" />
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
          </div>
          <small>Images Max. 15MB</small>
          {errors.image && <small className="error">{errors.image}</small>}

          <h6>Jury’s Details</h6>
          <input
            type="text"
            name="juryName"
            placeholder="Jury’s Name"
            value={formData.juryName}
            onChange={handleChange}
          /> <br />
          {errors.juryName && <small className="error">{errors.juryName}</small>}

          <div className="admin-image">
            <img src={file} alt="Upload" />
            <input type="file" name="juryImage" accept="image/*" onChange={handleFileChange} />
          </div>
          <small>Images Max. 15MB</small>
          {errors.juryImage && <small className="error">{errors.juryImage}</small>}
        </div>
        <div className="admin-info-two ">
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
