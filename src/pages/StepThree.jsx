import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../style/step.css";
import l from "../assets/logo.png";
import { Link } from "react-router-dom";

const StepThree = () => {
  const [formData, setFormData] = useState({
    contribution: ""
  });

  const [wordCount, setWordCount] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSubmitting(false);
    
    // Verify previous steps are completed
    const step1 = localStorage.getItem("applicationStep1");
    const step2 = localStorage.getItem("applicationStep2");
    if (!step1 || !step2) navigate("/step");
  }, [navigate]);

  useEffect(() => {
    const savedData = localStorage.getItem("applicationStep3");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      
      setWordCount(parsedData.contribution.trim() ? parsedData.contribution.trim().split(/\s+/).length : 0);
    }
  }, []);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setFormData({ contribution: text });
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  const validate = () => {
    const newErrors = {};
    if (wordCount < 300) newErrors.contribution = "Minimum of 300 words required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      localStorage.setItem("applicationStep3", JSON.stringify(formData));
      navigate("/step4");
    } catch (err) {
      console.error("Error saving step 3:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-lg-flex information">
      <div className="personal position-relative">
        <Link to="/" className="pt-lg-3 mx-lg-4 ">
          <img
            src={l}
            alt=""
            className="m-2  m-lg-4 position-absolute top-0 start-0"
          />
        </Link>

        <h1 className="step-paragraph">Step 3/4: Innovation Contribution Details</h1>
      </div>

      <section className="personal_info">
        <div className="person-form">
          <h6>Your Impact In Technology</h6>
          <form onSubmit={handleSubmit}>
            <textarea
              name="contribution"
              value={formData.contribution}
              onChange={handleTextChange}
              style={{ height: "120px" }}
              placeholder="Describe your innovative contribution towards technological advancement"
              className={errors.contribution ? "error" : ""}
            ></textarea>
            {errors.contribution && <small style={{ color: "red" }}>{errors.contribution}</small>}
            <br />

            <small>{wordCount} words (Minimum of 300 words required)</small>

            <button type="submit" className="bt" disabled={isSubmitting || wordCount < 300}>
              {isSubmitting ? "Processing..." : "Next"} <FaArrowRight />
            </button>
          </form>

          <div className="previous">
            <button className="bt" onClick={() => navigate("/step2")}>
              <FaArrowLeft /> Previous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepThree;