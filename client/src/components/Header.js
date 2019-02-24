import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="total">
        <div className="container  text-white">
          <div className="logo">
            <p>BirdWatcher.com</p>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">R$</a>
              </li>
              <li>
                <a href="#">Br</a>
              </li>
              <li>
                <button className="borderlight text-white">
                  Register as a guide
                </button>
              </li>
              <li>
                <button>Register</button>
              </li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom text-white">
          <div>
            <ul>
              <li>
                <a href="#">Acomodations</a>
              </li>
              <li>
                <a href="#">Flights</a>
              </li>
              <li>
                <a href="#">Equips</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
