import React, { Component } from "react";
import Footer from "../container/Footer";
import StyleJobAdd from "./StyleAddJob.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class AddJob extends Component {
  render() {
    return (
      <>
        <main className="baoboc">
          <div className="main-content" id="main-content">
            <div className="newsH1">
              <h1>
                <ion-icon name="add-circle-outline"></ion-icon> Add Job
              </h1>
            </div>
            <div className="Content-recruiter">
              <Link to="/view-job">
                <ion-icon name="eye-outline"></ion-icon>
              </Link>
              <form action className="job-requirement-form">
                <div>
                  <label htmlFor="jobId">
                    <ion-icon name="albums-outline"></ion-icon> Job ID
                  </label>
                  <label>xxx</label>
                </div>
                <div>
                  <label htmlFor="JobTitle">
                    <ion-icon name="filter-outline"></ion-icon> Job Title
                  </label>
                  <input type="text" name id="JobTitle" />
                </div>
                <div>
                  <label htmlFor="description">
                    <ion-icon name="filter-outline"></ion-icon> Job Description
                  </label>
                  <input type="text" name id="description" />
                </div>
                <div>
                  <label htmlFor="benefit">
                    <ion-icon name="accessibility-outline"></ion-icon> benefit
                  </label>
                  <input type="text" name="benefit" id="benefit" />
                </div>
                <div>
                  <label htmlFor="Place">
                    <ion-icon name="locate-outline"></ion-icon> Place
                  </label>
                  <input type="text" name id="Place" />
                </div>
                <div>
                  <label htmlFor="Salary">
                    <ion-icon name="cash-outline"></ion-icon> Salary
                  </label>
                  <input type="text" name id="Salary" />
                </div>
                <div>
                  <label for="numberkey">
                    <ion-icon name="key-outline"></ion-icon> Number Keywords:
                  </label>
                  <select className="selectKeyWord" name="" id="">
                    <option value="null">null</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="button">
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default AddJob;
