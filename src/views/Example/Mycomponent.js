import React, { Component } from 'react';
import AddComponent from './AddComponent';

import ConditionalOutPut from './ConditionalOutPut';

class Mycomponent extends Component {
    state = {
        arrJobs: [
            {id:'job1', title:'front-end' , salary:'300'},
            {id:'job2', title:'back-end' , salary:'6536',},
            {id:'job3', title:'fullstack' , salary:'30620'}
        ]
    }
    addNewJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob.push(job);
            this.setState({
                arrJobs :currentJob
            })
            console.log('check job', job)
    }
    deleteJob = (job) =>{
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {
        return (
        <>
        <AddComponent addNewJob = {this.addNewJob}/>
        <ConditionalOutPut arrJobs={this.state.arrJobs} deleteJobs={this.deleteJob}/>
        </>
        );
    }
}

export default Mycomponent;