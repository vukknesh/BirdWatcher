import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
    console.log(this.state);
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="container-login">
        <div className="signin-right">
          <input
            onChange={this.onEmailChange}
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            onChange={this.onPasswordChange}
            placeholder="password"
            name="password"
          />
        </div>
        <div className="subcontainer1">
          <div className="subb1">
            <ul>
              <li>
                <i className="fas fa-search fa-2x" />
                Follow your favorite birds.
              </li>
              <li>
                <i className="fas fa-binoculars fa-2x" />
                Find guides where you need.
              </li>
              <li>
                <i className="user fas fa-users fa-2x" />
                Join the community.
              </li>
            </ul>
          </div>
        </div>

        <div className="subcontainer2">
          <div className="subsub2">
            <div className="logo-log">
              <i className="bird fas fa-feather" />
              <a onClick={this.onSubmitSignIn} href="#">
                Log in
              </a>
            </div>
            <div className="slogan">
              <h1>See where can you go to find the next lifer.</h1>
            </div>
            <div className="mini-slogan">
              <p>Join BirdWatcher today.</p>
            </div>
            <div className="join-btns">
              <p onClick={() => onRouteChange("register")} className="register">
                Register
              </p>
              <p onClick={this.onSubmitSignIn} className="signin">
                Log In
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
