import React, { Component } from "react";
import logo from "./logo.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class NavReCruiter extends Component {
  render() {
    return (
      <>
        <header className="nav">
          <img className="logo" src={logo} alt="" />
          <div className="menu-container">
            <ul className="menu-item">
              <li className="item">
                <ion-icon name="home-outline"></ion-icon>
                <Link className="active" to="/home">
                  Home
                </Link>
              </li>
              <ul className="menu">
                <li className="menu-item has-child">
                  <ion-icon name="help-circle-outline"></ion-icon>
                  <a href="/#" className="menu-link">
                    <span>Job</span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <i className="fa fa-angle-down">
                    <ul className="menu-child">
                      <li className="menu-child-item">
                        <Link to="/view-job" className="menu-child-link">
                          <ion-icon name="eye-outline"></ion-icon> View Job
                        </Link>
                      </li>
                      <li className="menu-child-item">
                        <Link to="/add-job" className="menu-child-link">
                          <ion-icon name="add-circle-outline"></ion-icon> Add
                          Job
                        </Link>
                      </li>
                    </ul>
                  </i>
                </li>
                <i className="fa fa-angle-down"></i>
              </ul>
              <ul className="menu">
                <li className="menu-item has-child">
                  <ion-icon name="help-circle-outline"></ion-icon>
                  <a href="#" className="menu-link">
                    <span>Quiz Test</span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <i className="fa fa-angle-down">
                    <ul className="menu-child">
                      <li className="menu-child-item">
                        <Link
                          to="/aptitude-question"
                          className="menu-child-link"
                        >
                          <ion-icon name="help-circle-outline"></ion-icon>{" "}
                          Aptitude Question{" "}
                        </Link>
                      </li>
                      <li className="menu-child-item">
                        <a href="#" className="menu-child-link">
                          <ion-icon name="help-circle-outline"></ion-icon>{" "}
                          Personality Question
                        </a>
                      </li>
                    </ul>
                  </i>
                </li>
                <i className="fa fa-angle-down"></i>
              </ul>
              <i className="fa fa-angle-down">
                <li className="item">
                  <ion-icon name="alert-circle-outline"></ion-icon>
                  <a a href="/About">
                    About
                  </a>
                </li>
              </i>
            </ul>
            <i className="fa fa-angle-down">
              <div className="account-candidate">
                <img
                  className="avatar"
                  src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
                  alt=""
                />

                <div className="name-account">
                  <h4>Mrs.Hanh</h4>
                  <p>Recruiter</p>
                </div>

                <button className="logout-button">
                  {" "}
                  <ion-icon name="log-out-outline"></ion-icon>{" "}
                </button>
              </div>
            </i>
          </div>
          <i className="fa fa-angle-down"></i>
        </header>
        <i className="fa fa-angle-down"></i>
      </>
    );
  }
}

export default NavReCruiter;
