import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Login from "./components/Login";
import Register from "./components/Register/Register";
import { Provider } from "react-redux";
import store from "./store";

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
        joined: "",
        picture: ""
      }
    };
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };
  loadUser = data => {
    this.setState({
      user: {
        picture: data.picture.data.url,
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
      <Provider store={store}>
        <div>
          {this.state.route === "home" ? (
            <div>
              <Header
                user={this.state.user}
                // user={this.loadUserFacebook}
                onRouteChange={this.onRouteChange}
              />
              <Searchbar />
              <Hero />
              <Hero2 />
              <Footer />
            </div>
          ) : this.state.route === "signin" ? (
            <Login
              loadUserFacebook={this.loadUserFacebook}
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          ) : this.state.rout === "register" ? (
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          ) : (
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          )}
        </div>
      </Provider>
    );
  }
}

export default App;
