import React from "react";

// class ClassCompCall extends React.Component{
//   render(){
//     return(
//         <>
//         {/* call to Welcome  */}
//         {/* class comp.=> this keyword is use the  declaretion  / fun comp.=>not use this keyword */}
//         <h3>Welcome to ClassCompCall myName : {this.props.myName}</h3> 
//         <h3>Welcome to ClassCompCall companyName : {this.props.companyName}</h3>     
    

//         </>
//     )
//   }
// }
// export default ClassCompCall;




//+++++++ ES6 feature of (this. =>noy use repeat time )=> destructuring  +++++++++++
class ClassCompCall extends React.Component{
  render(){
    console.log(this.props);
    const {myName , companyName , personObj } = this.props ;     //ES6 featurre of destructuring
    console.log(personObj);
    
    return(
        <>
        <h3>Welcome to ClassCompCall myName : {myName}</h3> 
        <h3>Welcome to ClassCompCall companyName : {companyName}</h3>     
        <p>Person Details {JSON.stringify(personObj)}</p>

        </>
    )
  }
}
export default ClassCompCall;