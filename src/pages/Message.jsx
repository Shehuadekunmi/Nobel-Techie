import React from "react";
import { Link } from "react-router";
const Message = () => {
  return (
    <div className="mod">
      <div className="message">
        <h1>Thank you for your submission!</h1>
        <p>
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
  );
};

export default Message;
