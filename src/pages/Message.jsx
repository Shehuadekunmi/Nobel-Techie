import React from "react";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";
import '../style/message.css'
const Message = () => {
  return (
    <div className="cross">
 <Link to="/step">
      <ImCross style={{color: 'red', fontSize:'60px'}}/>
      </Link>
   
    <div className="mod">
     
      <div className="message">
        <h1>Thank you for your submission!</h1>
        <p className="pt-lg-5">
          Our judges will review your application and respond within 30 working
          days. All communication will be conducted via email.
        </p>
        <p className="mob">
          Need help? <br /> Contact us at 
          <Link className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ps-2">
            hello@nobletechie.com
          </Link>{" "}
        </p>
        <p className="desk">
          Need help? Contact us at{" "}
          <Link className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            hello@nobletechie.com
          </Link>{" "}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Message;
