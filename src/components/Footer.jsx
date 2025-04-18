import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
     

      <section className="foo2">
        <div>
          <h3>About & Mission</h3>
          <p>
            Celebrating innovation and honoring excellence, NobleTechie proudly
            recognizes the individuals who are leading the charge in
            technological advancements across the globe.
          </p>
          <p>
            Doctor Ernesto San Martin 543 almost Narciso Colman Lambaré, 2420,
            Paraguay
          </p>
          <div>
            <input
              type="email"
              placeholder="Join our mailing list to stay updated"
            />
            <button>Subscribe</button>
          </div>
        </div>

        <footer className="foo3">
          <ul>
                   <Link to='/' className='text-decoration-none'>  <li>About Us</li></Link>
                   <Link to='/app' className='text-decoration-none'>    <li>How to Apply</li></Link>
                   <a href="#judge" className='text-decoration-none'> <li>Meet the Noble Judges</li> </a>
                   <Link to='/winner' className='text-decoration-none'>   <li>Noble Techies</li></Link>
                   <Link to='/app' className='text-decoration-none'>  <li>Apply Now</li></Link>
                 
                 </ul>
        </footer>
      </section>
    </div>
  );
};

export default footer;
