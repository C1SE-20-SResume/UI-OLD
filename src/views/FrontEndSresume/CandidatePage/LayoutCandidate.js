import React, { Component } from "react";

import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import JobList from "./JobList";
import JobDetail from "./JobDetail";
import NavLogin from "./NavCandidatee";
import LoginPage from "../Login/LoginPage";

import { useCookies } from "react-cookie";
import NavCandidatee from "./NavCandidatee";
import Login from "../Login/LoginPage";

function LayoutCandidate() {
  const [cookies, setCookies] = useCookies(["user"]);
  return (
    <>
      <BrowserRouter>
        <NavCandidatee />
        <Switch>
          <Route path="/job" exact>
            <JobList />
          </Route>
          <Route path="/job-detail/:id">
            <JobDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default LayoutCandidate;
