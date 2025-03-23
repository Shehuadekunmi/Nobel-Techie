import React from "react";
import "../style/application.css";
import img from '../assets/image0.png'
import img1 from '../assets/image.png'
const Appplication = () => {
  return (
    <div>
      <section className="app">
        <h1>Become the Next NobleTechie</h1>
        <p className="mob">Are you pushing the boundaries of technology? Submit your application and let your innovation be recognized on a global stage</p>
        <p className="desk">Are you pushing the boundaries of technology? <br /> Submit your application and let your innovation be recognized on a global stage</p>

        <button className="btn">Start Application</button>
      </section>

      <section className="app1">
        <h2>What You Need to Apply</h2>
        <hr className="apr"/>
        <li> 1. Proof of your innovative contribution"</li>
        <li>2. Details of your impact on technological advancement"</li>
        <li>3. Supporting documents and CV"</li>

        <button className="btn">Start Application</button>

        <div className="app2">
      <img src={img} alt="" />
      </div>

      <div className="app3">
      <img src={img1} alt="" />
      </div>

      </section>

     
    </div>
  );
};

export default Appplication;
