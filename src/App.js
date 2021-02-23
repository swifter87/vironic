import React from "react";
import "./App.css";

import Form from "./Form";

import Login from "./Pages/Login";
import Home from "./Pages/Home";

import logo from "./logo.png";
import Overlay from "./Overlay";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Advertisers from "./Pages/Advertisers";
import Development from "./Pages/Development";
import Monetizaion from "./Pages/Monetizaion";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="main">
            <nav className="header">
              <a href="/">
                <img src={logo} alt="Logo" className="logo" />
              </a>
              <Overlay />
              <div className="navigation">
                <a href="/#advertise">Buyers</a>
                <a href="/#monetization">Sellers</a>
                <a href="/#contact">Contact</a>
                <button className="primary-btn">
                  <Link to="/Login" className="link">
                    Login
                  </Link>
                </button>
              </div>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home />
                <Advertisers />
                <Development />
                <Monetizaion />
                <Form />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
            </Switch>
          </div>
          <footer className="footer">
            <p> Global Promoting Services Ltd.</p>
            {/* <p>261 Bolton Rd, Bury, Gtr. Manchester, England, BL8 2NZ</p> */}
            <p>261 Bolton Rd, Bury, UK, BL8 2NZ</p>
          </footer>
        </Router>
      </div>
    );
  }
}
