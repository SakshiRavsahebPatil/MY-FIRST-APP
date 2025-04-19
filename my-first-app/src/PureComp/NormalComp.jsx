import Button from 'react-bootstrap/esm/Button';
import React, { Component } from 'react'

export class NormalComp extends Component {

  constructor(){
    super ();

    this.state ={
      count :0
    }
  }


  incrementCount =()=>{
    console.log("Inside Increment count");
    this.setState({count : this.state.count})
  }
  
  render() {
    console.log('Inside render');

    return (
      <>
        <h1>Normal Component</h1>
        <p>Count : {this.state.count}</p>
        <Button variant = "primary"  onClick={this.incrementCount}>Increment Count</Button>
      </>
    )
  }
}

export default NormalComp
