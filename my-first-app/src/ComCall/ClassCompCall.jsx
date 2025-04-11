import React from "react";

class ClassCompCall extends React.Component{
  render(){
    return(
        <>
        {/* call to Welcome  */}
        {/* class comp.=> this keyword is use the  declaretion  / fun comp.=>not use this keyword */}
        <h3>Welcome to ClassCompCall {this.props.myName}</h3>     

        </>
    )
  }
}
export default ClassCompCall;
