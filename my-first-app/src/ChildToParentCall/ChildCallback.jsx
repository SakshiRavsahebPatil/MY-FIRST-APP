import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';

export class ChildCallback extends Component {

    constructor(){
        super();

        this.state ={
            Message : 'Message from Child Component'
        }
   }

   sendMessage =()=>{
      console.log("Inside sendMessage calling parent comp function");
      this.props.sendDataToParentComp(this.state.Message);
   }


  render() {
    return (
      <>
        <h2>Child Callback</h2>
        <Button variant = "primary"  onClick={this.sendMessage}>Send Data To Parent</Button>
        
      </>
    )
  }
}

export default ChildCallback
