

// const Body = () =>{
//     return(
//         <h1>This is Body</h1>
//     )
// }
// export default Body;

// ================ Class Components ==================
//without any render() method not creating class component 
import {Component , React, Fragment } from "react"

class Body extends Component {

    render(){
        return 
        <Fragment>
           <h4>This is body</h4>    
           <h4>This is body1</h4>     
        </Fragment>
    }
}
export default Body;
