
import React, { Component } from 'react'
import ChildCallback from './ChildCallback';

export class ParentCallback extends Component {

    constructor(){
        super();

        this.state ={
           childTOParentData : 'Temporary data'
        }
   }

   handleDataFromChild = (message)=>{
    console.log("Function called from child comp");
    this.setState({childTOParentData : message})
   }

  render() {
    return (
      <>
      <h2>Child TO Parent Component</h2>
      <h4>Message : {this.state.childTOParentData}</h4>
      <ChildCallback sendDataToParentComp = {this.handleDataFromChild}/>
        
      </>
    )
  }
}

export default ParentCallback
