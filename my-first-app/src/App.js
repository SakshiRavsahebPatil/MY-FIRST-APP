import logo from './logo.svg';
import './App.css';
import Header from './componentBasic/Header';
import Body from './componentBasic/Body';
import JsxComponent from './componentBasic/JsxComponent';
import MyComponent from './componentBasic/MyComponent';
import MyClassComp from './componentBasic/MyClassComp';
import Welcome from './Welcome';
import ClassCompBody from './ClassCompBody';
import JSXTest from './JsxTest/JSXTest';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Header/> */}

      {/* <Body/> */}

      {/* <JsxComponent/> */}
      {/* <MyComponent/>

      <MyClassComp/> */}
      {/* <Welcome/> */}

      {/* <ClassCompBody/> */}

       <JSXTest/>
    </div>
  );
}

export default App;
