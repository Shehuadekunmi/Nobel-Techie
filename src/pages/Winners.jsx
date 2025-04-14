import React, { useEffect, useState } from "react";
import "../style/winner.css";
import { useNavigate } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";

const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialCount, setInitialCount] = useState(20);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const updateInitialCount = () => {
      const isMobile = window.innerWidth <= 768;
      const count = isMobile ? 10 : 12;
      setInitialCount(count);
      setVisibleCount(count);
    };

    updateInitialCount();
    window.addEventListener("resize", updateInitialCount);
    return () => window.removeEventListener("resize", updateInitialCount);
  }, []);

  // Fetch winners from API
  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/winners`);
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
  }, [API_URL]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + initialCount);
  };


  const isButtonDisabled = visibleCount >= winners.length;

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );

  return (
    <div>
      <Header />
      <div className="winner-hero">
        <div className="winner-hero-CTA">
          <h1 className="text-white py-lg-5">Meet the NobleTechie Winners</h1>
        </div>
      </div>

      <div className="winner-details11">
        <div className="py- winner-details">
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            winners.slice(0, visibleCount).map((winner) => (
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

                <div className="d-flex my-2 country-flag">
                  <h5 className=" mx-2 py-2">{winner.candidateName}</h5>

                  <img
                    src={
                      winner.country
                        ? `https://flagcdn.com/64x48/${winner.country.toLowerCase()}.png`
                        : "/public/default-vite.svg"
                    }
                    alt="Country Flag"
                    onError={(e) => {
                      e.target.src = "/public/default-vite.svg";
                    }}
                    className=""
                  />
                </div>

                <hr />
                <span className="mx-2">{winner.role}</span>
                <hr />
                <span className="mx-2">{winner.company}</span>
              </div>
            ))
          )}
        </div>
        {/* Show "Load More" button only if there are more winners to display */}
        <div className="view-more">
          <div className="text-center mt-">
            <button
              className="bt btn-primar"
              onClick={handleViewMore}
              disabled={isButtonDisabled}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Winners;
