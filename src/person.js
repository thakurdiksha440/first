import React, { Component } from 'react';


const Human = ({name, age, rollNo, children, otherdata, click, changed}) => {
    return (
        <div>
            {name}{age}{rollNo}{otherdata}{click} {changed}
            

        </div>) 


    }



// class Human extends Component{
//                      constructor(){super()}
//                      render(){

//                          return(
//                              <div>
//                                  {this.props.otherdata}
//                              </div>
//                          )

//                      }
                     
// }


export default Human;   
