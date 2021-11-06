import React, { Component } from "react";

import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import AddJob from "./AddJob";
import AptitudeQuestion from "./AptitudeQuestion";
import HomePage from "./HomePage";
import NavReCruiter from "./NavReCruiter";
import ViewJob from "./ViewJob";
import ViewQuestionAptitude from "./ViewQuestionAptitude";
class LayoutRecruiter extends Component {
  render() {
    return (
      <>
        <NavReCruiter />
        <Switch>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/add-job">
            <AddJob />
          </Route>
          <Route path="/aptitude-question">
            <AptitudeQuestion />
          </Route>
          <Route path="/view-question-aptitude">
            <ViewQuestionAptitude />
          </Route>
          <Route path="/view-job">
            <ViewJob />
          </Route>
        </Switch>
      </>
    );
  }
}

export default LayoutRecruiter;
