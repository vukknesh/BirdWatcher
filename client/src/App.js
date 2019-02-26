import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Login from "./components/Login";
import Register from "./components/Register/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "signin",
      isSignedin: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(console.log);
  }
  onRouteChange = route => {
    this.setState({ route: route });
  };
  render() {
    return (
      <div>
        {this.state.route === "home" ? (
          <div>
            <Header onRouteChange={this.onRouteChange} />
            <Searchbar />
          </div>
        ) : this.state.route === "signin" ? (
          <Login onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
