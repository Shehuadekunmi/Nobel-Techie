import React from "react";
import "../style/winner.css";
import winner from "../assets/winner.png";
import text from "../assets/text.png";
const Winners = () => {
  return (
    <div>
      <div className="winner-hero">
        <h1 className="text-white">Meet the NobleTechie Winners</h1>
      </div>

      <div className="py-5 winner-details">
        <div className="winner-detail pb-5 mb-5">
          <img src={winner} alt="" className="winner-detail-img"/>

          <h5 className="d-flex justify-content-between py-3 gap-">
            Adrijana Husic <img src={text} alt="" />
          </h5>
          <hr />

          <span>Role</span>
          <hr />

          <span>Company Name</span>
        </div>

        <div className="winner-detail pb-5 mb-5">
          <img src={winner} alt="" className="winner-detail-img"/>

          <h5 className="d-flex justify-content-between py-3 gap-">
            Adrijana Husic <img src={text} alt="" />
          </h5>
          <hr />

          <span>Role</span>
          <hr />

          <span>Company Name</span>
        </div>

        <div className="winner-detail pb-5 mb-5">
          <img src={winner} alt="" className="winner-detail-img"/>

          <h5 className="d-flex justify-content-between py-3 gap-">
            Adrijana Husic <img src={text} alt="" />
          </h5>
          <hr />

          <span>Role</span>
          <hr />

          <span>Company Name</span>
        </div>
      </div>
    </div>
  );
};

export default Winners;
