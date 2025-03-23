import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StepThree = () => {
  return (
    <div className="d-lg-flex information">
      <div className="personal">
        <h1>Step 3/4: Innovation Contribution Details </h1>
      </div>

      <section className="personal_info">
        <div className="person-form">
          <h6>Your Impact In Technology</h6>
          <form action="">
            <textarea
              name=""
              id=""
              style={{ height: "120px" }}
              placeholder="Describe your innovative contribution towards technological advancement"
            ></textarea>
            <br />
            <small>Minimum of 500 words </small>

            <Link>
              <button className="btn">
                Next <FaArrowRight />
              </button>
            </Link>
          </form>
          <div className="prevoius">
            <Link>
              <button className="btn">
                {" "}
                <FaArrowLeft /> Previous{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepThree;
