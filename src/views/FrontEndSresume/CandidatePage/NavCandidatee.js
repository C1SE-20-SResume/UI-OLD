import React, { Component } from "react";
import logo from "./logo.png";
import StyleNavbar from "./StyleNavbar.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class NavCandidatee extends Component {
  render() {
    return (
      <>
        <div className="navigation">
          <img src={logo} className="logo"></img>
          <div className="menu-item">
            <ul>
              <li>
                <Link id="link" to="/job">
                  <ion-icon name="newspaper"></ion-icon>
                  Job
                </Link>
              </li>
              <li>
                <Link id="link" to="/">
                  <ion-icon name="help-circle"></ion-icon> Quiz Test
                </Link>
              </li>
              <li>
                <Link id="link" to="/quiz-test">
                  {" "}
                  <ion-icon name="alert-circle"></ion-icon> About Us
                </Link>
              </li>
            </ul>
            <ul>
              <li className="item">
                <Link to="/login" className="linking_Login">
                  Login{" "}
                </Link>
              </li>
              <li className="item">
                <Link to="/register" className="linking_register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default NavCandidatee;
