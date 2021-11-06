import React, { Component } from 'react';
import './Demo.css'

class ConditionalOutPut extends Component {
    state = {
        showJobs :false
    }
    handleShowHide=() =>{
        this.setState({
            showJobs:!this.state.showJobs
        })
    }
    handledeleteclick = (job)=>{
    console.log(">>>>>.",job)
    this.props.deleteJobs(job)
    }

    render() {
        let{showJobs}= this.state;
            let {arrJobs} =this.props;
            let check = showJobs ===  true ? 'conditional = true' : 'conditional = false'  
            console.log('>>>check conditional : ' , check)
            return(
               <>
               
               {showJobs===false && <div><button className='button' onClick={()=> this.handleShowHide()}> show</button></div> }  
               
               {showJobs===true && 
                    <>

                    <div>
                         {
                             arrJobs.map((item,index) => {
                        
                                 return(
                                     <div>
                                         {item.title} - {item.salary} <></> <span onClick={()=> this.handledeleteclick(item)}>x</span>
                                     </div>
                                 )
                            
                             })
                         }
                     </div>
                     <div><button className='button' onClick={()=> this.handleShowHide() }>hide</button></div>
                    </>
                
               }
          
               </>
                )
       
    }
}

export default ConditionalOutPut;