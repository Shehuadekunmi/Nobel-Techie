import React from "react";
import "../style/adminpage.css";
import file from "../assets/file.png";
import logo from "../assets/logo.png";

const AdminPage = () => {
  return (
    <div className="adminpage">
      <div id="admin-header">
        <img src={logo} alt="" />
        <button className="btn">Publish</button>
      </div>
      <div id="adminpage">
        <div className="admin-info-one">
          <h2>Candidate Information</h2>
          <div>
            <div>
              <input type="text" placeholder="Enter candidate name" />
            </div>
            <div>
              <input type="text" placeholder="Enter certificate number" />
            </div>
          </div>
          <div>
            <div>
              <input type="text" placeholder="Enter certificate holder" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                placeholder="Brief Description"
              ></textarea>
            </div>
            <div>
              {" "}
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div>
            <div className="admin-image ">
              <img src={file} alt="" />
              <div>
                <p className="mob">
                  Upload Candidates Image . <span>Max. 15MB</span>{" "}
                </p>
                <p className="desk">
                  Upload Candidates Image <br /> <span>Max. 15MB</span>{" "}
                </p>
              </div>
              <button>Upload</button>
            </div>
          </div>
          <div>
            <h6>Jury’s Details </h6>
            <input type="text" placeholder="Jury’s Name" />
          </div>
          <div className="admin-image gap-">
            <img src={file} alt="" />
            <div>
              <p>
                Upload Jury’s Image <br /> <span>Max. 15MB</span>{" "}
              </p>
            </div>
            <button>Upload</button>
          </div>
        </div>
        <div className="admin-info-two">
          <h2>Blog’s Information</h2>
          <textarea
            name=""
            id=""
            placeholder="Body - Chris Mnyaka’s journey into the world of visual effects and 
          cinematography is a powerful story of grit, passion, and determination. 
          Growing up in a small township outside Johannesburg, Chris found himself 
          captivated by the power of storytelling in film at an early age. 
          His fascination grew as he watched Hollywood blockbusters on a 
          modest television set at home, dreaming of one day creating visuals 
          as awe-inspiring as those he saw on the screen. But for Chris, 
          pursuing a career in film was a distant dream, hindered by financial 
          constraints and limited resources."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
