
import React , { userState } from 'react'

const StateInFunComp = () => {

    //syntax of userState hook in Func Comp
    // const[stateName , fun name to change state ] = userState(Initial value)

    const[ UserName , setUserName ] = userState("Guest")
  
    // Number state
    const [count , setCount] = userState(0)


  // object state
  const [person , changePerson] = userState({Name : "Sakshi" , Age : 21 })


    const changeUser = () =>{
      setUserName('Admin');
    }

    const ChangeCount=()=>{
      setCount(count+1);
    }


    const updatePerson = ()=>{
      changePerson (PrePerson =>(
          {...prePerson, Name : 'Priya'}
      ))
    }
    return (
    <>
      <h1>State in Function Component</h1>
      <h2>Current User : {UserName}</h2>
      <button onclick ={changeUser}> Login as Admin </button>

      <h2>Count : {count}</h2>
      <button onclick ={ChangeCount}>+ </button>

      <h2>Person : {JSON.stringify(person)}</h2>
      <button onclick ={ChangeCount}>Change Person </button>

    </>
  )
}

export default StateInFunComp
