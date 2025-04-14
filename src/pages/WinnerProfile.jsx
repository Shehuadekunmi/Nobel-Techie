import React, { useEffect, useState } from "react";
import "../style/winnerProfile.css";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Footer from "../components/Footer2";
import Head1 from "../components/Head1";
import axios from "axios";

const WinnerProfile = () => {
  const { id } = useParams();
  const [winnerData, setWinnerData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(
    () => {
      const fetchWinnerData = async () => {
        try {
          const response = await axios.get(`${API_URL}/auth/winners/${id}`);
          setWinnerData(response.data.data.winner);
        } catch (error) {
          console.error("Error fetching winner data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchWinnerData();
    },
    [id],
    [API_URL]
  );

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
          <div className="pt-3 over-all">
            <div className="winner-pro-desktop">

              <h1>{winnerData.candidateName}</h1>

              <p className="my-2 mx-2 my-lg-3 winner-profile-desktop "> Certified Number-{winnerData.certificateNumber} </p>
             
            </div>

            <div className="flg4">
              <div className="d-flex my-2 country-flag">

                <p className="my-2 mx-2 winner-profile-mobile "> Certified Number-{winnerData.certificateNumber} </p>

                <img
                  src={`https://flagcdn.com/64x48/${winnerData.country.toLowerCase()}.png`}
                  alt="Country Flag"
                  onError={(e) => {
                    e.target.src = "/public/default-vite.svg";
                  }}
                  className="winner-profile-mobile"
                />
              </div>

              <img
                src={`https://flagcdn.com/64x48/${winnerData.country.toLowerCase()}.png`}
                alt="Country Flag"
                onError={(e) => {
                  e.target.src = "/public/default-vite.svg";
                }}
                className="winner-profile-desktop"
              />

              <p className="mx-2">
                {winnerData.year} NobleTechie winner and {winnerData.role} at{" "}
                {winnerData.company}
              </p>
            </div>
          </div>
        </header>

        <section className="profile-content">
          <div className="profile-img">
            <div className="profile-image-wahala">
            <img
              src={winnerData.image}
              alt="Winner"
              className="mob"
              loading="lazy"
            />
            </div>
           

            <p className="mx-2 mx-lg-0">
              {winnerData.blogContent || "No blog content available"}
            </p>
          </div>
        </section>

        <div className="profile-img2">
          <img src={winnerData.juryImage} alt="Judge" loading="lazy" />
          <div className="profile-text">
            <h2>{winnerData.juryName || "No Judge Name"}</h2>
            <p>NobleTechie Judge</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default WinnerProfile;
