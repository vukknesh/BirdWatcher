import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Signin from "./components/Signin";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(console.log);
  }
  render() {
    return (
      <div id="main">
        <Header />

        <Searchbar />
        <Hero />
        <Hero2 />
        <Footer />
      </div>
    );
  }
}

export default App;
