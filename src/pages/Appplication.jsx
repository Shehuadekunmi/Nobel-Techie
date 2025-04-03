import React from "react";
import "../style/application.css";
import img from '../assets/data1.png'
import img1 from '../assets/data.png'
import Header from '../components/Header'
import Footer2 from "../components/Footer2";
import { Link } from "react-router";
const Appplication = () => {
  return (
    <div>
      <Header/>
      <section className="app">
        <h1>Become the Next NobleTechie</h1>
        <p className="mob">Are you pushing the boundaries of technology? Submit your application and let your innovation be recognized on a global stage</p>
        <p className="desk">Are you pushing the boundaries of technology? <br /> Submit your application and let your innovation be recognized on a global stage</p>

       <Link to='/step' className="text-decoration-none link"> <button className="btn">Start Application</button> </Link> 
      </section>

      <section className="app1">
        <h2>What You Need to Apply</h2>
        <hr className="apr"/>
        <li> 1. Proof of your innovative contribution"</li>
        <li>2. Details of your impact on technological advancement"</li>
        <li>3. Supporting documents and CV"</li>
        
        <Link to='/step' className="text-decoration-none"> <button className="btn">Start Application</button> </Link> 


        <div className="app2">
      <img src={img} alt="" />
      </div>

      <div className="app3">
      <img src={img1} alt="" />
      </div>

      </section>

        <Footer2/>
    </div>
  );
};

export default Appplication;
