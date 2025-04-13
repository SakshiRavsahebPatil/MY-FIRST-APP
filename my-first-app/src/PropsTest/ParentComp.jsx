
import React from 'react'
import ChildCompA from './ChildCompA'

const ParentComp = () => {
    const message = "Welcome From Parent Comp"
  return (
    <div>
      <h1>In Parent Component</h1>
      <ChildCompA msgA= {message}/>
    </div>
  )
}

export default ParentComp
