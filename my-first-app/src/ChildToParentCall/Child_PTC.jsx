
import React, { Component } from 'react'

export class Child_PTC extends Component {
  render() {
    return (
      <>
        <h1>Parent to Child Child Component</h1>
        <p>Message from Parent Component : {this.props.data}</p>
      </>
    )
  }
}

export default Child_PTC
