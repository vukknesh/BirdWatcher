import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container-login">
        <div className="subcontainer1">
          <div className="subb1">
            <ul>
              <li>
                <i className="fas fa-search fa-2x" />
                Follow your favorite birds.
              </li>
              <li>
                <i class="fas fa-binoculars fa-2x" />
                Find guides where you need.
              </li>
              <li>
                <i class="user fas fa-users fa-2x" />
                Join the community.
              </li>
            </ul>
          </div>
        </div>

        <div className="subcontainer2">
          <div className="subsub2">
            <div className="logo-log">
              <i className="bird fas fa-feather" />
              <a href="#">Log in</a>
            </div>
            <div className="slogan">
              <h1>See where can you go to find the next lifer.</h1>
            </div>
            <div className="mini-slogan">
              <p>Join BirdWatcher today.</p>
            </div>
            <div className="join-btns">
              <p
                onClick={() => this.props.onRouteChange("register")}
                className="register"
              >
                Register
              </p>
              <p
                onClick={() => this.props.onRouteChange("home")}
                className="signin"
              >
                Log In
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
