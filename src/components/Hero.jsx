import React from "react";
import { Link } from "react-router";
import img from "../assets/Frame.png";
import img1 from "../assets/winner.png";
import img2 from "../assets/Frame (1).png";
import img3 from "../assets/Frame (2).png";
import img4 from "../assets/Frame (3).png";
import img5 from "../assets/Frame (4).png";
import "../style/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-CTA">
        <div className=" hono">
          <h1>Honoring Technological Excellence</h1>
          <p className="py-2 py-lg-0">
            Join the global movement that celebrates innovative contributions
            towards technological advancement
          </p>

          <Link to="/app" > 
            <button>Become a Noble Techy</button>
          </Link>
        </div>

        <div className="d-flex overflow-x-scroll mt-5 gap-1 ps-1 mx-4 hero-image ">
          <img src={img} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
