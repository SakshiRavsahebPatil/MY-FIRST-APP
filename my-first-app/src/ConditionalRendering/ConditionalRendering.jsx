
import React from 'react'
// import Login from './Login';
// import SignUp from './SignUp';


const ConditionalRendering = () => {
    const isLoggedIn = true;

    // if (isLoggedIn) {
    //     return <Login/> 
    // }else{
    //     return <SignUp/>
    // }


    //1. conditional Rendering using If else
    // if (isLoggedIn) {
    //     return <h1>Welcome to Conditional Rendering</h1>   
    // }else{
    //     return<h1>Welcome as Guest !!</h1>
    // }


    //2. conditional Rendering using variable
    // let result;
    // if (isLoggedIn) {
    //     result = <h1>Welcome to Conditional Rendering</h1>   
    // }else{
    //     result = <h1>Welcome as Guest !!</h1>
    // }
    // return result;


    // 3. Conditional rendering using ternary Operator
    // return isLoggedIn ? <h1>Welcome to Conditional Rendering</h1> : <h1>Welcome as Guest !!</h1>;


    // 4. conditional Rendering using short cercuit   (short cercuit =>only using true value , not printing False value)
    // return isLoggedIn && <h1>Welcome to Conditional Rendering</h1>


    
}
export default ConditionalRendering
