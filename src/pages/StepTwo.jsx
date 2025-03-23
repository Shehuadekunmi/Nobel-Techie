import React from 'react'
import { Link } from 'react-router'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const StepTwo = () => {
  return (
    <div className="d-lg-flex information">
    <div className="personal">
      <h1> Step 2/4: Personal Information </h1>
    </div>
   
      <section className="personal_info">
        <div className="person-form">
          <h6>Tell Us About Your Organization(s)</h6>
          <form action="">
            <input type="text" placeholder="Current Organization " /> <br />
            <input type="text" placeholder="Organization Website" /> <br />
            <input type="email" placeholder="Current Position Held" /> <br />
            <Link>
              <button className="btn">Next <FaArrowRight /></button>
            </Link>
            
          </form>
          <div className="prevoius">
          <Link>
              <button className="btn"> <FaArrowLeft /> Previous </button>
            </Link>
          </div>
          
        </div>
      </section>
  </div>
  )
}

export default StepTwo
