import React, { useState } from "react";
import winner from "../assets/winner.png";
import text from "../assets/text.png";
import "../style/certificate.css";
import logo from "../assets/logo.png";
import API from "../api";
import { useNavigate } from "react-router";

const Certificate = () => {
  const [certNum, setCertNum] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!certNum.trim()) {
      setError("Please enter a certificate number");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await API.get(`/api/certificates/${certNum.trim()}`);
      navigate(`/pro/${res.data.data.winner._id}`);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid certificate number");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="cert-hero">
        <h5 className="text-white px-2 mob">
          Enter Certification Number to Access Profile
        </h5>
      </div>

      <div className="cert-detail pb-5 mb-5 ">
        <div className="cert-info">
          <div className="cert-desk1">
            <div className="desk" id="desk">
              <img src={logo} alt="" />
            </div>
            <img src={winner} alt="" className="cert-detail-img mob" />
            <h5 className="d-flex justify-content-between py-3 text-white">
              Adrijana Husic <img src={text} alt="" />
            </h5>
            <input type="text" placeholder="Role" id="role" /> <br /> <br />
            <input type="text" placeholder="Company Name" id="role" />
          </div>

          <div className="cert-desk2">
            <h5 className="px-2 desk">
              Enter Certification Number to Access Profile
            </h5>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <input
              type="text"
              placeholder="Enter Certification Number"
              className="input"
              value={certNum}
              onChange={(e) => setCertNum(e.target.value)}
            />

            <button className="bnt" onClick={handleVerify} disabled={loading}>
              {loading ? "Verifying..." : "Verify & View Profile →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
