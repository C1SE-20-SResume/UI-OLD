import React, { Component } from 'react';
import ContentCandidate from '../CandidatePage/ContentCandidate';
import Footer from '../container/Footer';
import addJob from './AddJob';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ContentAdmin extends Component {
    render() {
        return (
            <>
            <main className="baoboc">
    <div className="main-content" id="main-content">
    <div className="newsH1">
        <h1>News</h1>
      </div>
      <div className="Content-recruiter">
            <addJob/>
        </div>
    </div>
  </main>
<Footer/>
          
          </>
        );
    }
}

export default ContentAdmin;