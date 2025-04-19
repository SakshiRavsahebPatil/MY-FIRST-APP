
import React, { Component } from 'react'
import Child_PTC from './Child_PTC';

export class Parent_PTC extends Component {

    constructor(){
         super();

         this.state ={
            message : 'Parent to Child data'
         }
    }
  render() {
    return (
      <>
         <h1>Parent to Child data Parent component</h1>
         <Child_PTC data = {this.state.message}/>
      </>
    )
  }
}

export default Parent_PTC
