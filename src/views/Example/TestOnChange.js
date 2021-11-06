import React, { Component , Fragment } from 'react';

class TestOnChange extends Component {
    state = {
        name : ""
    }
    handleChange = (event) =>{
        this.setState({
            name : event.target.value // lay du lieu
        })
    }
    render() {
        return (
            <Fragment>
                <div className='"first'>
                    <input type='text' value={this.state.name} onChange={(event) => this.handleChange(event) }></input>
                    <p>my name is {this.state.name}</p>
                </div>
            </Fragment>
        );
    }
}

export default TestOnChange;