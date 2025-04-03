import React from "react";
import "../style/home.css";
import img from "../assets/data.png";
import img1 from "../assets/image1.png";
import img6 from "../assets/img6.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img11 from '../assets/data1.png'
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
      <section className="dri">
        <h1>Driving Progress. Recognizing Visionaries.  </h1> 
        <div className="hr">
        <hr />
        </div>
       
        <p>
          At NobleTechie, we believe that true innovation is more than just an
          idea, it’s all about impact that drives meaningful changes. This award
          recognizes individuals whose contributions have driven change, solved
          real-world problems, and shaped industries.
        </p>
        <div className="img">
          <img src={img} alt="" loading="lazy" />
        </div>
         <div className="homo3">
              <img src={img11} alt="" loading="lazy" />
              </div>
      </section>

      <section className="jud">
        <h1>Meet The Judges Behind NobleTechie</h1>
        <div className="hrr">
        <hr />
        </div>
        <p>
          A distinguished panel of industry leaders, innovators, and visionaries
          dedicated to recognizing individuals with contributions to technology.
        </p>

        <div className="d-flex overflow-x-scroll mt-4 gap-3 mx-1 jud1">
          <div className="jd1">
            <img src={img1} alt="" loading="lazy" />
            <p>Thony Da Silva Romero</p>
          </div>
          <div className="jd1">
            <img src={img1} alt="" loading="lazy" />
            <p>Thony Da Silva Romero</p>
          </div>

          <div className="jd1">
            <img src={img6} alt="" loading="lazy" />
            <p>Izabella Veloso</p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
