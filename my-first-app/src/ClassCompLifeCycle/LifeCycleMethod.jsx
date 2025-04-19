import React, { Component } from 'react'

 class LifeCycleMethod extends Component {

    //1.Initialization Phase
    constructor(props){
          super(props);

          this.state = {
            message : "Welcome to React"
          }
          console.log('Class Component Constructor Called');    
    } //1phase end

    
    updateMessage = () =>{
       console.log('Inside updateMessage method');
        this.setState({message : 'Welcome to Class comp life cycle'})
    }

  //2. Mounting Phase
  static getDerivedStateFromProps(props){                          //this method print befor render method ,you can stored the before value using the render method
    console.log("Insie getDerived State from Props");
    
  }

  render() {
    console.log('class Component render method Called');

    return (
      <div>
           <h3>Class Component Life Cycle</h3>
           <p> State  Message : {this.state.message}</p>
           <button type="button" class="btn btn-success" onClick={this.updateMessage} >Update State</button>
      </div>
    )
  }


  //2. Mounting Phase =>sub method
  componentDidMount(){
    console.log(`Component did mount called`); 
  }


  //3. Updating Phaaase 
     //3.1, getDerivedStateFromProps
     //3.2, shouldComponentUpdate
     //3.3, render
    //3.4, getSnapshotBeforeUpdate
    //3.5, componentDidUpdate


    shouldComponentUpdate(){
       console.log('Inside should comp update');
       return true;  
      // return false;     //false hone pr aage ka method call nhi hoga
      
    }

    getSnapshotBeforeUpdate(){
      console.log('Get snapshort befor update ')
      return null;
    }


  componentDidUpdate(){
    console.log(`component did upadate called`);
    return null;
  }


  //4. Unmounting Phase
  componentWillUnmount(){
    console.log('Component unmount called');
    
  }

}
export default LifeCycleMethod
