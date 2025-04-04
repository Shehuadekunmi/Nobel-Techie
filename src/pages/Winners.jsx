import React, { useEffect, useState } from "react";
import "../style/winner.css";
import { useNavigate } from "react-router";
import API from "../api";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import axios from "axios";

const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL; // Use environment variable

  useEffect(() => {
    const fetchWinners = async () => {
      try {

        const res = await axios.get(`${API_URL}/auth/winners`, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });

        console.log("API Response:", res.data);

        if (res.data?.data?.winners && Array.isArray(res.data.data.winners)) {
          setWinners(res.data.data.winners);
        } else {
          setError("Invalid response format from API.");
        }
      } catch (error) {
        console.error("Error fetching winners:", error);
        setError("Failed to load winners.");
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);

  if (loading) return <p> <Loading/> </p>;

  return (
    <div>
      <Header/>
      <div className="winner-hero">
        <h1 className="text-white">Meet the NobleTechie Winners</h1>
      </div>

      <div className="py-5 winner-details">
        {loading ? (
          <p> <Loading/> </p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          winners.map((winner) => (
            <div
              key={winner._id}
              className="winner-detail pb-5 mb-5"
              onClick={() => navigate(`/cert/${winner._id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={winner.image || winner}
                alt={winner.name}
                className="winner-detail-img"
                loading="lazy" 
              />
              <h5 className="d-flex justify-content-between mx-2 py-3">
                {winner.candidateName} 
              </h5>
              <hr />
              <span className="mx-2">{winner.role}</span>
              <hr />
              <span className="mx-2">{winner.company}</span>
            </div>
          ))
        )}
      </div>
      <Footer2/>
    </div>
  );
};

export default Winners;
