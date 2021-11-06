import React, { Component,Fragment } from 'react';
import './Demo.css'

class AddComponent extends Component {
    state = {
        title:'',
        salary:'',
       
    }
    handleSubmit = (event) => {
        event.preventDefault();// ngan chan load lai
        if(!this.state.title || !this.state.salary){
            alert('misssing!')
            return;
        }
        this.props.addNewJob({
            id : Math.floor(Math.random()*10001),
            title : this.state.title,
            salary : this.state.salary
        })
        this.setState({
            title:'',
            salary:''
        })
 }
 handleChangeTitleJob = (event) =>{
         this.setState({
             title: event.target.value
         })
 }
 handleChangeSalary = (event) =>{
     this.setState({
         salary: event.target.value
     })
}
    render() {
        return (
            <Fragment>
            <form >
              <label htmlFor="fname">Job title:</label><br />
              <input type="text" value={this.state.title}   onChange={(event)=> this.handleChangeTitleJob(event)} /><br />
              <label htmlFor="lname">Salary:</label><br />
              <input type="text" value={this.state.salary}    onChange={(event)=> this.handleChangeSalary(event)} /><br /><br />
              <input type="submit" defaultValue="submit" className='button' onClick={(event)=> this.handleSubmit(event)} />

              </form>
            


        </Fragment>
        );
    }
}

export default AddComponent;