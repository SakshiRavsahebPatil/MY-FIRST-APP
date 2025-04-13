
import React, { Component } from 'react'

export default class StateInClassComp extends Component {
    
    constructor(props){
        super(props)

        this.User = "Guest";

        this.state={
          UserName : "Guest"
        }

        this.state={
          Number : 0,
          flag : true,
          arrayValue : [1,2,3,4,4,5],
          person:{
            name : "Sakshi",
            age : 21
          }
        }
    }

    changeUser(){
        console.log("Inside change user Function");
        this.User = "Admin";
        console.log(this.User); 
    }
     

    changeUserName(){
      console.log("Inside new change userName function");
      this.setState({UserName : "Admin"})
      console.log(this.state.UserName);
      
    }

    render() {
    return (
      <div>
        <h1>State in Class Comp</h1>

        {/* <h3>Current User using normal value : {this.User}</h3>
        <button onClick={this.changeUser.bind(this)}> Login as Admin </button> */}

        <h3>Current User using stats : {this.state.UserName}</h3>
        <button onClick={this.changeUserName.bind(this)}> Login as Admin </button>

        <p>Number is : {this.state.Number}</p>
        <p>Boolean is : {this.state.flag ? "True" : "False"}</p>
        <p>Array Value : {this.state.arrayValue.join(',')}</p>
        <p>Person Object Detail : {JSON.stringify(this.state.person)}</p>
      </div>
    )
  }
}
