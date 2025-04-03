import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../style/step.css";
import l from "../assets/logo.png";

const StepOne = () => {
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Save to session/local storage or context
      localStorage.setItem("applicationStep1", JSON.stringify(formData));
      navigate("/step2");
    } catch (err) {
      console.error("Error saving step 1:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-lg-flex information">
      <div className="personal  position-relative">
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
        <h1> Step 1/4: Personal Information </h1>
      </div>

      <section className="personal_info">
        <div className="person-form">
          <h6>Tell Us About Yourself</h6>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              className={errors.surname ? "error" : ""}
            />
            {errors.surname && (
              <small style={{ color: "red" }} className="error-message">
                {errors.surname}
              </small>
            )}
            <br />

            <input
              type="text"
              name="firstName"
              placeholder="First Name & Other Name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <small style={{ color: "red" }} className="error-message">
                {errors.firstName}
              </small>
            )}
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <small style={{ color: "red" }} className="error-message">
                {errors.email}
              </small>
            )}
            <br />

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Next"} <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default StepOne;
