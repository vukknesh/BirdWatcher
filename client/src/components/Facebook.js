import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }

  componentClicked = () => {
    fetch("http://localhost:5000/facebook/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(response => response.json())

      .then(user => {
        if (user) {
          this.setState({ isLoggedIn: true });
          this.props.loadUser(this.state);
          this.props.onRouteChange("home");
        } else {
          this.props.onRouteChange("register");
        }
      })
      .catch(err => {
        this.onErrorFacebook();
      });
  };

  onErrorFacebook = () => {
    this.responseFacebook();
    fetch("http://localhost:5000/registerfacebook/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email
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

  responseFacebook = response => {
    this.setState({
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture
    });
    console.log(this.state);
  };

  render() {
    // let fbContent;
    // if (this.state.isLoggedIn) {
    //   fbContent = <div />;
    // } else {
    // fbContent = (
    return (
      <FacebookLogin
        appId="2106381906253376"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        onClick={this.componentClicked}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    );

    // );
  }
  // return <div>{fbContent}</div>;
}
