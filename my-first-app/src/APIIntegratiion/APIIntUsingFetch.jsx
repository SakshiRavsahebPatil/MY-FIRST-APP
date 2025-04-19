
import React, { Component } from 'react'

export class APIIntUsingFetch extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            users : []
        }
     }

    componentDidMount(){
        console.log("Inside component did mount");
          this.fetchUserDetails();
    }

    fetchUserDetails = async ()=>{
        console.log('Inside FetchUser deatils');
        const userDate = await fetch('https://fakestoreapi.com/users');
        const data = await userDate.json();
        console.log(data);
        this.setState({users : data})
    }


    render() {
    return (
      <>
         <h2>Calling APi using fetch Method </h2>
         <ul>
            {this.state.users.map((user)=>(
                <li>{ user.username } - { user.password }</li>
            ))}
         </ul>
      </>
    )
  }


}
export default APIIntUsingFetch
