import React from "react";
import "./Register.css";

export default function Register({ onRouteChange }) {
  return (
    <div>
      <div className="register-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
        <div className="register-language">
          <ul>
            <li>English</li>
            <li>Portuguese</li>
          </ul>
        </div>
      </div>
      <div className="register-container">
        <div className="register-form">
          <h1>Log in to BirdWatcher.com</h1>
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <p onClick={() => onRouteChange("home")}>Register</p>
        </div>
      </div>
    </div>
  );
}
