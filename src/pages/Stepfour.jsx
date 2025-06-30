import React, { useState, useEffect } from "react";
import "../style/stepfour.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import l from "../assets/logo.png";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Stepfour = () => {
  const [outcome, setOutcome] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    const step1 = localStorage.getItem("applicationStep1");
    const step2 = localStorage.getItem("applicationStep2");
    const step3 = localStorage.getItem("applicationStep3");

    if (!step1 || !step2 || !step3) navigate("/step");
    const step4Data = JSON.parse(
      localStorage.getItem("applicationStep4") || "{}"
    );
    if (step4Data) {
      step4Data.outcome = outcome;
      step4Data.confirmed = confirmed;
    }
  }, [outcome, confirmed]);
  

  const handleFileChange = (e, setter) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return setter(null);
    setter(selectedFile);
    console.log("Selected File:", selectedFile);
  };

  const handleOutcomeChange = (e) => {
    setOutcome(e.target.value);
    const step4Data = JSON.parse(
      localStorage.getItem("applicationStep4") || "{}"
    );
    step4Data.outcome = e.target.value;
    localStorage.setItem("applicationStep4", JSON.stringify(step4Data));
  };

  const handleConfirmationChange = () => {
    setConfirmed((prev) => {
      const newValue = !prev;
      const step4Data = JSON.parse(
        localStorage.getItem("applicationStep4") || "{}"
      );
      step4Data.confirmed = newValue;
      localStorage.setItem("applicationStep4", JSON.stringify(step4Data));
      return newValue;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmed) {
      setError("Please confirm the information is accurate");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare data to send to backend
      const step1Data = JSON.parse(
        localStorage.getItem("applicationStep1") || "{}"
      );
      const step2Data = JSON.parse(
        localStorage.getItem("applicationStep2") || "{}"
      );
      const step3Data = JSON.parse(
        localStorage.getItem("applicationStep3") || "{}"
      );
      const step4Data = JSON.parse(
        localStorage.getItem("applicationStep4") || "{}"
      );

      const formData = new FormData();
      formData.append("firstName", step1Data?.firstName || "");
      formData.append("email", step1Data?.email || "");
      formData.append("surname", step1Data?.surname || "");
      formData.append(
        "organization",
        JSON.stringify(step2Data.organization || {})
      );
      formData.append("contribution", step3Data.contribution || "");
      formData.append("outcome", step4Data.outcome || "");
      formData.append("evidence", file1); // Add file1 to form data
      formData.append("cv", file2); // Add file2 to form data

      console.log("FormData: ", formData);
      console.log("File1:", file1);
      console.log("File2:", file2);
      console.log("FormData Entries:");
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      const response = await axios.post(`${API_URL}/applications`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("API Response:", response.data);
      localStorage.clear();
      navigate("/message");
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => navigate("/step3");

  return (
    <div className="evidence-container d-lg-flex">
      <div className="left-section position-relative">
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
        <h1 >Step 4/4: Evidence of Contribution</h1>
      </div>

      <div className="right-section">
        {error && <div className="error-message mb-3">{error}</div>}

        <div className="outcome">
          <h3 className="my-3">Measurable Outcomes</h3>
          <textarea
            value={outcome}
            onChange={handleOutcomeChange}
            placeholder="Describe measurable results..."
            required
          ></textarea>
        </div>

        <div className="file-upload">
          {file1 ? (
            <>
              <a
                href={URL.createObjectURL(file1)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Evidence
              </a>
              <button className="remove-btn" onClick={() => setFile1(null)}>
                Remove
              </button>
            </>
          ) : (
            <>
              <label className="label">Upload Supporting Evidence</label>
              <button
                type="button"
                className="upload-btn"
                onClick={() => document.getElementById("file1-upload").click()}
              >
                Upload
              </button>
              <input
                type="file"
                id="file1-upload"
                hidden
                onChange={(e) => handleFileChange(e, setFile1)}
              />
            </>
          )}
        </div>

        <div className="file-upload">
          {file2 ? (
            <>
              <a
                href={URL.createObjectURL(file2)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
              <button className="remove-btn" onClick={() => setFile2(null)}>
                Remove
              </button>
            </>
          ) : (
            <>
              <label className="label">Submit Your CV</label>
              <button
                type="button"
                className="upload-btn"
                onClick={() => document.getElementById("file2-upload").click()}
              >
                Upload
              </button>
              <input
                type="file"
                id="file2-upload"
                hidden
                onChange={(e) => handleFileChange(e, setFile2)}
              />
            </>
          )}
        </div>

        <div className="confirmation d-flex gap-2">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={handleConfirmationChange}
          />
          <label>I confirm that the information provided is accurate.</label>
        </div>

        <div className="buttons">
          <button className="prev-btn" onClick={handlePrevious}>
            ← Previous
          </button>
          <button
            className="next-btn"
            onClick={handleSubmit}
            disabled={isSubmitting || !file1 || !file2}
          >
            {isSubmitting ? "Submiting..." : "Submit Application →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepfour;
