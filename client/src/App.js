import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const Public = () => <h3>public</h3>;
// const Private = () => <h3>private</h3>;

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }));
//       console.log(this.redirectToReferrer);
//     });
//   };

//   render() {
//     const { redirectToReferrer } = this.state;
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     console.log(redirectToReferrer);
//     if (redirectToReferrer === true) {
//       return <Redirect to="/" />;
//     } else {
//       return (
//         <div>
//           <p>You must log in to view this page</p>
//           <button onClick={this.login}>Log In</button>
//         </div>
//       );
//     }
//   }
// }

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(console.log);
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;

// <Router>

/* //     <ul>
      //       <li>
      //         <Link to="/public">Public paage</Link>
      //       </li>
      //       <li>
      //         <Link to="/private">Private paage</Link>
      //       </li>
      //     </ul>
      //     <Route path="/public" component={Public} />
      //     <Route path="/login" component={Login} />
      //     <PrivateRoute path="/private" component={Private} />
      //   </div> */
// </Router>

// <BrowserRouter>
//   <Switch>
//     <Route exact path="/" component={Searchbar} />
//     <Route path="/home" component={Hero} />
//     <Route path="/about" component={Hero2} />
//     {/* <Route component={Error} /> */}
//   </Switch>
// </BrowserRouter>
// <div id="main">
