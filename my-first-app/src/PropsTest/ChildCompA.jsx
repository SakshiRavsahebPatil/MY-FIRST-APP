
import React from 'react'
import ChildCompB from './ChildCompB'

const ChildCompA = ({msgA}) => {                  //destructuring  means props ---replace---> {msgA}
    // props.msgA = "welcome to ChildCompA";    //props only read . we can not change values in child comp
  return (
    <div>
      <h2>Child Component A : {msgA}</h2>
      <ChildCompB msgB ={msgA}/>
    </div>
  )
}

export default ChildCompA
