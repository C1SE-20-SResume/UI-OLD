import React, { Component } from 'react';
import AddTodoList from './AddTodoList';
import './Todoapp.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class ListTodo extends Component {
    state = {
        listTodo:[
            {id:'todo1' , title:'Doing Homework'},
            {id:'todo2' , title:'Making Video'},
            {id:'todo3' , title:'Programing'}],
        editTodo:{

        }
    }
    addNewTodo = (todo) =>{
        let addtodo = this.state.listTodo;
        addtodo.push(todo)
        this.setState({
            listTodo:addtodo
        })
        toast.success("Wow so easy!");
    }
    deleteTodo = (todo) =>{
        let curenttodo = this.state.listTodo;
        curenttodo = curenttodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: curenttodo
        })
        toast.success("! delete Sucssess")
    }
    handleEditTodo =(todo )=>{
        let { editTodo,listTodo}=this.state //=list.state.listodo
        let isEmptyObj = Object.keys(editTodo).length ===0;
        //save
        if(isEmptyObj ===false && editTodo.id===todo.id){
            let listTodoCopy=[...listTodo]
            let objectIndex =listTodoCopy.findIndex((item=> item.id=== todo.id));
            listTodoCopy[objectIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo:{}
            })
        
            toast.success("! save Sucssess")
            return ;
        }
        //edit
            this.setState({
                editTodo:todo
            })
       

   
    }
  handleOnChangeEditTodo= (event)=>{
      let editTodoCopy ={...this.state.editTodo};
      editTodoCopy.title = event.target.value;
      this.setState({
          editTodo: editTodoCopy
      })
  }
    render() {
        let {listTodo ,editTodo}=this.state //=list.state.listodo
        let isEmptyObj = Object.keys(editTodo).length ===0;
        console.log('check empty obhect : ', isEmptyObj)

        return (
            <div className='ListTodo-container'>
                <AddTodoList  addNewTodo={this.addNewTodo}/>
                <div className='List-todo-content'>
                    {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index)  => {
                        return(
                            <div className='todo-child' key={item.id}>
                                {isEmptyObj===true 
                                ?
                                  <span>{index+1}-{item.title}</span>
                                :
                                <>
                                {editTodo.id===item.id ?
                                     <span>
                                     {index+1} - <input onChange={(event)=>this.handleOnChangeEditTodo(event)} value={editTodo.title}/>
                                      </span>   
                                      :
                                      <span>
                                          {index+1}-{item.title}
                                      </span>
                                }
                                                             
                                </>
                               
                            }
                          
                           
                      
                             <button
                             onClick={()=> this.handleEditTodo(item)}
                             >
                                 {isEmptyObj===false && editTodo.id===item.id ? 'Save' : 'Edit'}
                                 </button>
                             <button
                             onClick={()=> this.deleteTodo(item)}
                             >Delete</button>
                         
                         </div>
                        )
                    })
                    }
                
              
            
                    
                </div>
            </div>
        );
    }
}

export default ListTodo;