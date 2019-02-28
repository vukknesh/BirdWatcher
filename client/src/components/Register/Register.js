import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = () => {
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
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
            <input
              onChange={this.onNameChange}
              type="text"
              name="name"
              placeholder="Nome"
            />
            <input
              onChange={this.onEmailChange}
              type="email"
              name="email"
              placeholder="email"
            />
            <input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              placeholder="password"
            />
            <p onClick={this.onSubmit}>Register</p>
          </div>
        </div>
      </div>
    );
  }
}
