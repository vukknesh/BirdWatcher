import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="total">
        <div className="container">
          <div className="logo">
            <p>
              BirdWatcher<span className="com">.com</span>
            </p>
          </div>
          <div className="menu">
            <ul className="user_center_nav">
              <li>
                <a href="#">R$</a>
              </li>
              <li>
                <a href="#">Br</a>
              </li>
              <li>
                <button className="borderlight">Register as a guide</button>
              </li>
              <li>
                <button onClick={() => this.props.onRouteChange("signin")}>
                  Sign Out
                </button>
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
