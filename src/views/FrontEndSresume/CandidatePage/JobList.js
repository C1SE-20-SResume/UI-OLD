import React, { useState, useEffect } from "react";
import logoCompany from "./fpt-software.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../container/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import StyleJobBoard from "./StyleJobBoard.css";
import { useCookies } from "react-cookie";

// const linkStyle = {

//   textDecoration: "none",
//   color: "black"

// };

function JobList() {
  const [cookies, setCookies] = useCookies(["user"]);
  const [listUsers, setListUser] = useState([]);
  useEffect(() => {
    fetch(`https://web-server.test/api/candidate/job?api_token=${cookies.user}`)
      .then((res) => res.json())
      .then((data) => setListUser(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="baoboc">
        <div className="main-content" id="main-content">
          <div className="newsH1">
            <h1>News</h1>
          </div>
          <div className="list-job">
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <Link
                    to={`/job-detail/${item.id}`}
                    className="col-span-1"
                    key={index}
                  >
                    <div className="card-job" key={item.id}>
                      <img
                        src={item.logo_url}
                        alt=""
                        className="logo-company"
                      />
                      <div className="job-title">
                        <h4>{item.job_title}</h4>
                        <div className="name-company">
                          <span>
                            Company :<b>{item.company_name}</b>
                          </span>
                        </div>
                        <div className="more-div">
                          <ul className="benefit">
                            <li>
                              <box-icon name="dollar-circle" />
                              <span>{item.salary}</span>
                            </li>
                            <li>
                              <box-icon name="current-location" />
                              <span>{item.job_place}</span>
                            </li>
                          </ul>
                          {/* <div className="update-time">
                            <box-icon
                              className="icon-calendar"
                              name="calendar"
                            ></box-icon>{" "}
                            <span>{item.updated_at}</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default JobList;
