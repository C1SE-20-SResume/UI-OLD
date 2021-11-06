import React, { Component } from 'react';
import Footer from '../container/Footer';
import logoCompany from './fpt-software.png';
import StyleJobAdd from './StyleJobAdd.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ViewJob extends Component {
    render() {
        return (
         <>
                     <>
       <main className="baoboc">
      <div className="main-content" id="main-content">
      <div className="newsH1">
          <h1><ion-icon name="eye-outline"></ion-icon> View Job </h1>
        </div>
      
        <div className="list-job">
            
            
        <div  className="tag-job-detail">
    <div className="img-company-logo">
      <img src={logoCompany} alt="" />
    </div>
    <div className="job-title">
      <h4><Link className="link"  to="/JobDetail">Frontend Developer (ReactJS/ JavaScript)</Link></h4>
      <ul className="job-benefit">
        <li><ion-icon name="cash-outline"></ion-icon> 1000$</li>
        <li><ion-icon name="location-outline"></ion-icon>  Da Nang</li>
      </ul>
     
 
      
    </div>
    <div className="button-recruiter">
          <button>Edit</button>
      </div>
  </div>
            
 
 

 



        </div>
      </div>
    </main>
  <Footer/>
         </>
         </>
        );
    }
}

export default ViewJob;