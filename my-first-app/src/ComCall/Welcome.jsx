import React from 'react';
import ClassCompCall from './ClassCompCall';
import FunCompCall from "./FunCompCall";


const WelcomeCompCall = ()=>{
      const name = 'Sakshi_Patil';


 return(
    <>
      <h1>Welcome to WelcomeCompCall</h1>
      <ClassCompCall myName = {name}/>
      <FunCompCall myName = {name}/>
    </>
 )
}
export default WelcomeCompCall;