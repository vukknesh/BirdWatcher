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
      isSignedin: false,
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        entries: 0,
        joined: ""
      }
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/")
      .then(response => response.json())
      .then(console.log);
  }
  onRouteChange = route => {
    this.setState({ route: route });
  };
  loadUser = data => {
    this.setState({
      user: {
        email: data.email,
        password: data.password,
        name: data.name,
        joined: data.joined,
        id: data.id,
        entries: data.entries
      }
    });
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
          <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
