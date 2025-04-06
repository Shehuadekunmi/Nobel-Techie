import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import text from "../assets/text.png";
import "../style/certificate.css";
import logo from "../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Certificate = () => {
  const { winnerId } = useParams();
  const [winner, setWinner] = useState(null);
  const [certNum, setCertNum] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const controller = new AbortController();

    const fetchWinner = async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/winners/${winnerId}`, {
          signal: controller.signal,
          params: { ts: Date.now() }, // Cache buster
        });

        if (!res.data?.data?.winner) {
          throw new Error("Invalid winner data structure");
        }

        setWinner(res.data.data.winner);
        // setCertNum(res.data.data.winner.certificateNumber); 
        setError("");
      } catch (error) {
        if (error.name !== "CanceledError") {
          setError(
            error.response?.data?.message || "Failed to load certificate"
          );
          console.error("Fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (winnerId) {
      fetchWinner();
    }

    return () => controller.abort();
  }, [winnerId], [API_URL]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!certNum.trim()) {
      setError("Please enter a certificate number");
      return;
    }
    if (certNum.trim() !== winner?.certificateNumber) {
      setError("Invalid certificate number");
      return;
    }
    setLoading(true);
    setError("");

    try {
      navigate(`/pro/${winner._id}`);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid certificate number");
    } finally {
      setLoading(false);
    }
  }; 

  if (!winner) return <div className="loading"> <Loading/> </div>;

  return (
    <div className="certificate">
      <div className="cert-hero position-relative ">
        <Link to="/winner" className="pt-lg- mx-lg- mo">
          <img
            src={logo}
            alt="Company Logo"
            className="m-2 m-lg- position-absolute top- start-"
          />
        </Link>
        <h5 className="text-white px-2 mob pt-5">
          Enter Certification Number to Access Profile
        </h5>
      </div>

      <div className="cert-detail pb-5 mb-5">
        <div className="cert-info">
          <div
            className="cert-desk1"
            style={{
              position: "relative",
              backgroundImage: `url(${winner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              height: "300px",
              zIndex: "1"
            }}
          >

            <div className="winner-data">
              <h5 className="d-flex justify gap- text-white ">
              {winner.candidateName} 
              </h5>
              <div className="my-lg-2">
                <span className="detail-field text-white ">
               {winner.role}
                </span>
                <br />
              </div>

              <div className="my-lg-2">
                <span className="text-white "> {winner.company}</span>
                <br />
              </div>
            </div>
          </div>

          <div className="cert-desk2">
            <h5 className="px-2 desk">
              Enter Certification Number to Access Profile
            </h5>
            {error && <div className="error-message">{error}</div>}
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
