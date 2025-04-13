import React from 'react';
import ClassCompCall from './ClassCompCall';
import FunCompCall from "./FunCompCall";


const WelcomeCompCall = ()=>{
      const name = 'Sakshi_Patil';
      let person={
        name : "Sai",
        age : "21",
        address : "Pune"
      };


 return(
    <>
      <h1>Welcome to WelcomeCompCall</h1>
      <ClassCompCall myName = {name}  companyName ="Infosya"  personObj={person}/>
      <FunCompCall myName = {name}/>
    </>
 )
}
export default WelcomeCompCall;