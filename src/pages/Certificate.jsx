import React from "react";
import winner from "../assets/winner.png";
import text from "../assets/text.png";
// import "../style/certificate.css";
const Certificate = () => {
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
            <img src={winner} alt="" className="cert-detail-img mob" />

            <h5 className="d-flex justify-content-between py-3 text-white">
              Adrijana Husic <img src={text} alt="" />
            </h5>
            <hr />

            <span className="text-white">Role</span>
            <hr />

            <span className="text-white">Company Name</span>
          </div>

          <div className="cert-desk2">
            <h5 className=" px-2 desk ">
              Enter Certification Number to Access Profile
            </h5>
            <input type="text" placeholder="Enter Certification Number" />

            <button className="bnt">Verify & View Profile →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
