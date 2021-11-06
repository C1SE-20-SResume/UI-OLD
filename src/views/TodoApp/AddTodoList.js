import React, { Component } from 'react';

class AddTodoList extends Component {
    state = {
        title:''
    }
    handleChange =(event) =>{
        this.setState({
            title:event.target.value
        })
    }
    handleClickAddTodo=()=>{
        if (!this.state.title){
            alert('missing title')
            return;
        }
      let todo ={
        id : Math.floor(Math.random()*10001),
        title: this.state.title
      }
      this.props.addNewTodo(todo);
      this.setState({
          title: ''
          
      })
    }

    render() {
        let { title}=this.state;
        return (
            <div className='add-todo'>
            <input type='text' onChange={(event)=> this.handleChange(event)}/>
            <button type='button' onClick={()=> this.handleClickAddTodo()}>Add</button>
        </div>
        );
    }
}

export default AddTodoList;