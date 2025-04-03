import React, { useEffect, useState } from "react";
import "../style/winnerProfile.css";
import pro from "../assets/pro.png";
// import flg from "../assets/text.png";
import flg2 from "../assets/text2.png";
import API from "../api";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Footer from "../components/Footer2";
import Head1 from "../components/Head1";

const WinnerProfile = () => {
  const { id } = useParams();
  const [winnerData, setWinnerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWinnerData = async () => {
      try {
        const response = await API.get(`/api/auth/winners/${id}`);
        setWinnerData(response.data.data.winner);
      } catch (error) {
        console.error("Error fetching winner data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWinnerData();
  }, [id]);

  if (loading)
    return (
      <p>
        {" "}
        <Loading />{" "}
      </p>
    );
  if (!winnerData) return <p>Error loading data</p>;

  return (
    <div>
      <Head1 />
      <div className="winner-profile">
        <header>
          <div className="pt-5">
            <div>
              <h1>{winnerData.candidateName}</h1>
            </div>

            <div className="flg4">
              <p>
                {" "}
                Certificate Issued:{" "}
                {new Date(winnerData.issuedAt).toDateString()}{" "}
              </p>

              <p>
                {winnerData.year} NobleTechie winner and {winnerData.role} at{" "}
                {winnerData.company}
              </p>
            </div>
          </div>
        </header>

        <section className="profile-content">
          <div className="profile-img">
            <img src={winnerData.image} alt="Winner" className="mob" loading="lazy"  />
            <div className="winner-winner">
              <img
                src={winnerData.image || pro}
                alt="Winner Profile"
                className="desk"
              />
            </div>

            <p>{winnerData.blogContent || "No blog content available"}</p>
          </div>
        </section>

        <div className="profile-img2">
          <img src={winnerData.juryImage} alt="Judge" loading="lazy" />
          <div className="profile-text">
            <h2>{winnerData.juryName || "No Judge Name"}</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WinnerProfile;
