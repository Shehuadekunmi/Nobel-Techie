import React from "react";
import "../style/step.css";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";


const StepOne = () => {
  return (
    <div className="d-lg-flex information">
      <div className="personal">
        <h1> Step 1/4: Personal Information </h1>
      </div>
     
        <section className="personal_info">
          <div className="person-form">
            <h6>Tell Us About Yourself</h6>
            <form action="">
              <input type="text" placeholder="Surname " /> <br />
              <input type="text" placeholder="First Name & Other Name" /> <br />
              <input type="email" placeholder="Email" /> <br />
              <Link>
                <button className="btn">Next <FaArrowRight /> </button>
              </Link>
            </form>
          </div>
        </section>
    </div>
  );
};

export default StepOne;
