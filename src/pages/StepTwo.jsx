import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../style/step.css";
import l from "../assets/logo.png";
import { Link } from "react-router-dom";

const StepTwo = () => {
  const [formData, setFormData] = useState({
    organization: {
      name: "",
      website: "",
      position: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("applicationStep2");
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      organization: {
        ...prev.organization,
        [name]: value,
      },
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.organization.name.trim())
      newErrors.organization = {
        ...newErrors.organization,
        name: "Organization name is required",
      };
    if (!formData.organization.website.trim())
      newErrors.organization = {
        ...newErrors.organization,
        website: "Website is required",
      };
    if (!formData.organization.position.trim())
      newErrors.organization = {
        ...newErrors.organization,
        position: "Position is required",
      };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      localStorage.setItem("applicationStep2", JSON.stringify(formData));
      navigate("/step3");
    } catch (err) {
      console.error("Error saving step 2:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-lg-flex information">
      <div className="personal position-relative">
        <Link to="/" className="pt-lg-3 mx-lg-4 ">
          {" "}
          <img
            src={l}
            alt=""
            className="m-2 m-lg-4 position-absolute
            top-0
           start-0 "
          />{" "}
        </Link>

        <h1 className="step-paragraph">Step 2/4: Organization Information</h1>
      </div>

      <section className="personal_info">
        <div className="person-form">
          <h6>Tell Us About Your Organization(s)</h6>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Organization Name"
              value={formData.organization.name}
              onChange={handleChange}
              className={errors.organization?.name ? "error" : ""}
            />
            {errors.organization?.name && (
              <small style={{ color: "red" }}>{errors.organization.name}</small>
            )}
            <br />

            <input
              type="text"
              name="website"
              placeholder="Organization Website"
              value={formData.organization.website}
              onChange={handleChange}
              className={errors.organization?.website ? "error" : ""}
            />
            {errors.organization?.website && (
              <small style={{ color: "red" }}>
                {errors.organization.website}
              </small>
            )}
            <br />

            <input
              type="text"
              name="position"
              placeholder="Current Position Held"
              value={formData.organization.position}
              onChange={handleChange}
              className={errors.organization?.position ? "error" : ""}
            />
            {errors.organization?.position && (
              <small style={{ color: "red" }}>
                {errors.organization.position}
              </small>
            )}
            <br />

            <button type="submit" className="bt" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Next"} <FaArrowRight />
            </button>
          </form>

          <div className="previous">
            <button className="bt" onClick={() => navigate("/step")}>
              <FaArrowLeft /> Previous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepTwo;
