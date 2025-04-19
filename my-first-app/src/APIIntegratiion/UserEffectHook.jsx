
import React from 'react'
import { useEffect ,useState } from 'react';

const UserEffectHook = () => {

    //After React version 16.8 introduced hook in functional component replicate class comp life cycle behavior
    //class comp Initialization (construtor and state)=> userState hook in functional commp
    //class comp (componentdidMount, componentWillMount , componentDidUpdate) => useEffect hoook in func comp

    // useEffect(
    //     ()=>{
    //         //callback function
    //     },[dependency Array]
    // )

    const [count , setCount] = useState(0)
    const[name , setName] = useState("Yogita")
    //1. useEffect Hook and No dependency array - call on every  render
    // useEffect (
    //     ()=>{
    //         console.log("Inside useEffect and No dependency array");
    //     }
    // )

    //2. useEffect Hook with empty dependency array
    // useEffect (
    //     ()=>{
    //         console.log('Inside useEffect with empty dependency array');   
    //     }
    // )

    //3.  useEffect Hook dependency array
    useEffect(
        ()=>{
            console.log("Inside useEffect hook dependency array");
         },[count]
    )


    const incrementCount = () =>{
        console.log('Inside increment count');
        setCount(count+1)
    }


    const changeName =() =>{
        console.log("Inside change Name ");
        setName('Priyanka')
        
    }
  return (
    <div>
       {console.log('Inside return')}
       <h3>Functional Comp UseEffect Hook</h3>
       <h4>Count : {count} </h4> <button type="button" class="btn btn-success" onClick={incrementCount}>Increment Count</button>
       
       <h4>Name : {name}</h4><button variant="info"  onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UserEffectHook
