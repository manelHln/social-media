import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">MowGli</h3>
          <span className="login-desc">
            Connect with your friends and family around the world!
          </span>
        </div>
        <div className="login-right">
          <div className="register-box">
            <input type="text" placeholder="Username" className="login-input" />
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="login-input"
            />
            <button className="login-btn">Sign Up</button>
            <button className="login-register-btn">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
