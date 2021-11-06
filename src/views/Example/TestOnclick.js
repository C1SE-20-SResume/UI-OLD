import React, { Fragment,Component } from 'react';



class TestOnclick extends Component {
    handleClickButton = () => {
        console.log("hit the button")
        alert('hello');
        
    }
    state = {
        name: 'ronaldo'
       
    }
    render() {
        return (
         <Fragment>
            <div className="third">
                <button onClick={ () => this.handleClickButton()}>click me</button>
            </div>
         
          </Fragment>
        );
    }
}

export default TestOnclick;