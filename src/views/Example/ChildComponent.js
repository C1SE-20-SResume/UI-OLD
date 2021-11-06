import React, { Component } from 'react';

const ChildComponent = (props) =>{
 let {arrJobs} = props;

    return(
        <div>
            {
                arrJobs.map((item,index) => {
              
                    return(
                        <div>
                            {item.title} - {item.salary} 
                        </div>
                    )
               
                })
            }
        </div>
        )
}

export default ChildComponent;