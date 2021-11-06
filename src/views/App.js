import React, { useState, useEffect } from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCookies } from "react-cookie";

import JobDetail from "./FrontEndSresume/CandidatePage/JobDetail";
import NavReCruiter from "./FrontEndSresume/recruiter/NavReCruiter";
import AddJob from "./FrontEndSresume/recruiter/AddJob";
import AptitudeQuestion from "./FrontEndSresume/recruiter/AptitudeQuestion";
import ViewJob from "./FrontEndSresume/recruiter/ViewJob";
import viewquestion from "./FrontEndSresume/recruiter/ViewQuestionAptitude";
import ViewQuestionAptitude from "./FrontEndSresume/recruiter/ViewQuestionAptitude";

import LoginPage from "./FrontEndSresume/Login/LoginPage";

import JobList from "./FrontEndSresume/CandidatePage/JobList";
import LayoutRecruiter from "./FrontEndSresume/recruiter/LayoutRecruiter";
import LayoutCandidate from "./FrontEndSresume/CandidatePage/LayoutCandidate";
import NavCandidatee from "./FrontEndSresume/CandidatePage/NavCandidatee";

const App = () => {
  const [cookies, setCookies] = useCookies(["user"]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/login?api_token=${cookies.user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          setUser(data.data);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user.role_level);
  return (
    <>
      <BrowserRouter>
        {user.role_level == 1 ? <LayoutRecruiter /> : <LayoutCandidate />}
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
