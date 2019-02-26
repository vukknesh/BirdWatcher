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
                Follow your interets.
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
              <h1>See whats happening in the world right now</h1>
            </div>
            <div className="mini-slogan">
              <p>Join BirdWatcher today.</p>
            </div>
            <div className="join-btns">
              <a className="register" href="#">
                Sign Up
              </a>
              <a className="signin" href="#">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
