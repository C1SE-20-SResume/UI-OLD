import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import Footer from "../container/Footer";
function JobDetail() {
  const { id } = useParams();
  const [cookies] = useCookies(["user"]);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/${id}?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => setJob(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(job);
  const thongbao = () => {
    toast("Wow so easy!");
    console.log("ok");
  };

  return (
    <>
      <main className="baoboc">
        <div className="main-content" id="main-content">
          <div className="newsH1">
            <h1>Detail</h1>
          </div>
          <div className="list-job">
            <div className="main">
              <div className="content-main">
                <h1>{job.job_title}</h1>
                <div className="job_sub_title">NFQ Asia</div>
                <div className="job-detail_overview">
                  <ul>
                    <li>
                      <ion-icon name="cash-outline" />
                      {job.salary}
                    </li>
                    <li>
                      <ion-icon name="location-outline" />
                      {job.job_place}
                      <a href>See map</a>
                    </li>

                    <li>
                      <ion-icon name="location-outline" />
                      {job.updated_at}
                    </li>
                  </ul>
                </div>

                <div className="job-reasons">
                  <h3>Top 3 Reasons To Join Us</h3>
                  <ul>
                    <li>We truly value your thoughts and opinions</li>
                    <li>Global and professional</li>
                    <li>Honest, Transparent, Open-minded, Respect, Empathy</li>
                  </ul>
                </div>
                <h3 className="job_detail-second-title">Job Description</h3>
                <p>{job.job_descrip}</p>
                <div>
                  <h3>Benefit :</h3>
                  <p>{job.job_benefit}</p>
                </div>
                <ul>
                  <h2>Your Skills and Experience</h2>
                  <li>
                    3+ years of overall software development experience, with an
                    emphasis on web applications and front-end technologies
                  </li>
                  <li>
                    Proficient understanding of code versioning tools (Git is
                    preferred)
                  </li>
                  <li>In-depth understanding of in HTML/CSS, Javascript</li>
                  <li>Experience in front-end frameworks (e.g. React, Vue)</li>
                  <li>Experience in front-end frameworks (e.g. React, Vue)</li>
                </ul>
                <ul>
                  <h2>Big bonus:</h2>
                  <li>
                    Experience in booking business domain (hotel booking, car
                    rental)
                  </li>
                  <li>
                    Experience in front-end tools (e.g. Grunt, Gulp, Webpack)
                  </li>
                  <li>Strong knowledge of development based on REST API</li>
                  <li>Experience in GIS (e.g. OpenLayers)</li>
                  <li>
                    Knowledge of Realtime Communication (Pusher, PubNub,
                    FireBase)
                  </li>
                  <li>
                    In-depth understanding of the entire web development process
                    (design, development and deployment
                  </li>
                  <li>Good at English communication</li>
                </ul>
                <ul>
                  <h2>Why You'll Love Working Here</h2>
                  <li>Tech Rockstar : Apply the latest technology</li>
                  <li>
                    Exciting Projects : Working with overseas clients and
                    awesome projects.
                  </li>
                  <li>
                    Growing Opportunity : Work with top-notch experts from
                    around the world.
                  </li>
                  <li>Our core value: </li>
                  <ul>
                    <li>
                      <strong>Honest</strong> we only tell the truth (upfront)
                    </li>
                    <li>
                      <strong>Transparent</strong> we share information
                      adequately, and openly
                    </li>
                    <li>
                      <strong>Empathy</strong> sharing feelings matters
                    </li>
                    <li>
                      <strong>Open-minded</strong> we approach things with
                      candid attitude
                    </li>
                    <li>
                      <strong>Respect</strong> we treat everyone with the same
                      kindness
                    </li>
                  </ul>
                </ul>
                <ul>
                  <h2>Benefits include:</h2>
                  <li>
                    <strong>Laptop </strong> is provided.
                  </li>
                  <li>
                    A <strong>fun</strong> &amp; <strong>dynamic</strong>{" "}
                    environment and freedom to be <strong>creative</strong>.
                  </li>
                  <li>
                    Rock in <strong>open-mind, kind</strong> &amp;{" "}
                    <strong>humble</strong> band.
                  </li>
                  <li>
                    <strong>Modern office</strong> with the flexible relaxing
                    zone.
                  </li>
                  <li>
                    Company trip, <strong>team building</strong> &amp; other
                    community <strong>Tech activities</strong>.
                  </li>
                  <li>
                    <strong>13th-month</strong> salary,{" "}
                    <strong>Loyalty Program</strong>
                  </li>
                  <li>
                    Performance review <strong />.
                  </li>
                  <li>Extra Medical Insurance.</li>
                  <li>15 days annual leaves, working Monday – Friday.</li>
                </ul>
                <div className="button-apply-second" id="button-apply-second">
                  <input
                    className="inputfile"
                    id="file-upload-button"
                    type="file"
                  />
                  <div className="div-button">
                    <button onClick={thongbao} className="button-scan">
                      Scan
                    </button>
                    <button onClick={thongbao} className="button-submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default JobDetail;
