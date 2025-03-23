import React, { useState } from "react";
import "../style/stepfour.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const Stepfour = () => {
  const [outcome, setOutcome] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleFileChange = (e, setter) => {
    const selectedFile = e.target.files[0];
    setter(selectedFile);
  };

  return (
    <div className="evidence-container d-lg-flex">
      <div className="left-section">
        <h1>Step 4/4: Evidence of Contribution</h1>
      </div>

      <div className="right-section">
       <div className="outcome">
       <h3 className="my-3">Measurable Outcomes</h3>
        <textarea
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          placeholder="What are the measurable results of your contribution?"
        ></textarea>
        <small style={{ fontSize: "10px" }}>
          Explain outcomes, adoption, or real-world impact
        </small>
       </div>

        <div className="file-upload ">
          <label htmlFor="file-upload" className="upload-bt">
            <IoCloudUploadOutline size={40} />
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={(e) => handleFileChange(e, setFile1)}
            style={{ display: "none" }}
          />
          <label htmlFor="" className="label" >
            Upload Supporting Evidence <br />
            <small>
              PDF, Images, Videos, etc. <LuDot size={20} color="#a6a8aa" />
              Max. 15MB
            </small>
          </label>
          <button className="upload-btn">Upload</button>
          {/* {file1 && <small className="file-name">Selected File: {file1.name}</small>} */}
        </div>


        <div className="file-upload ">
          <label htmlFor="file-upload" className="upload-bt">
            <IoCloudUploadOutline size={40} />
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={(e) => handleFileChange(e, setFile1)}
            style={{ display: "none" }}
          />
          <label htmlFor="" className="label" >
          Submit Your CV <br />
            <small>
            (PDF/DOC, Max. 5MB)
            </small>
          </label>
          <button className="upload-btn">Upload</button>
          {/* {file1 && <small className="file-name">Selected File: {file1.name}</small>} */}
        </div>

    

        <div className="confirmation d-flex gap-2">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
            className="ms-md-5 ms-lg-4 my-lg-5 ms-3"
          />
          <label className="my-lg-5">
            I confirm that the information provided is accurate and verifiable.
          </label>
        </div>

        <div className="buttons">
          <button className="prev-btn">← Previous</button>
          <button className="next-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default Stepfour;
