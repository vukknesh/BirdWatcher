import React, { Component } from "react";

export default class Header extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="header-container">
        <img src={this.props.user.picture} alt={this.props.user.name} />
        <div>
          <ul>
            <li>
              <h1>Welcome, {this.props.user.name}</h1>
            </li>
            <li>Email: {this.props.user.email}</li>
            <li>LOG OUT</li>
          </ul>
        </div>
      </div>
    );
  }
}
