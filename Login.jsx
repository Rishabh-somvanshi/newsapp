import React from "react";
import "./styles.css"; // Import the styles for the component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import rocketImage from "./rocket.gif"; // Import the rocket image

const Card = () => {
  return (
    <div className="card-container d-flex justify-content-center align-items-center">
      <div className="card p-4">
        <div className="text-center mb-4">
          <img src={rocketImage} alt="Rocket Launch" className="w-100" />
        </div>
        <h4 className="text-center">Welcome to Bardeen</h4>
        <h6 className="text-center">Let's login to launch your automations</h6>
        
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" required placeholder="Email Address"/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" required placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
