import React, { Component,Fragment } from 'react';
import ChildComponent from './ChildComponent';
import ConditionalOutPut from './ConditionalOutPut';


class GetValueInput extends Component {
    state = {
        firstName:'',
        lastName:'',
        arrJobs: [
            {id:'job1', title:'front-end' , salary:'300'},
            {id:'job2', title:'back-end' , salary:'6536',},
            {id:'job3', title:'fullstack' , salary:'30620'}
        ]
    }
    handleSubmit = (event) => {
           event.preventDefault();// ngan chan load lai
           console.log('>>>>>>data : ',this.state)
    }
    handleChangeFirstName = (event) =>{
            this.setState({
                firstName: event.target.value
            })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
}

    render() {
    
        return (
          <Fragment>
              <form >
                <label htmlFor="fname">First name:</label><br />
                <input type="text" value={this.state.firstName}   onChange={(event)=> this.handleChangeFirstName(event)} /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" value={this.state.lastName}    onChange={(event)=> this.handleChangeLastName(event)} /><br /><br />
                <input type="submit" defaultValue="submit" onClick={(event)=> this.handleSubmit(event)} />

                </form>
               
     

          </Fragment>
        );
    }
}

export default GetValueInput;