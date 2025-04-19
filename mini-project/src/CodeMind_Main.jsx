
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HTML from './HTMLTuto/HTML';
import CSS from './CSSTuto/CSS';
import JavaScript from './JAVASCRIPTTuto/JavaScript';
import React_Main from './ReactTuto/React_Main';
// import React_Intro from './ReactTuto/React_Intro';
// import React_GetStart from './ReactTuto/React_GetStart';

const CodeMind_Main = () => {
  return (
    <>
    <BrowserRouter>

 <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid" id="top-nav">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/html" id="nav-text">HTML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/css" id="nav-text">CSS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/javaScript" id="nav-text">JavaScript</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/react" id="nav-text">React</a>
        </li>

        <li class="nav-item" id="search">
        <input type="text"  placeholder="searching" id="text-search"></input>
        <label for=""><button type="submit" id="button-search">search</button></label>
        </li>

      </ul>
    </div>
  </div>
</nav>

    <Routes>
            <Route exact path='/html' element={<HTML/>} ></Route>
            <Route exact path='/css' element={<CSS/>}></Route>
            <Route exact path='/javaScript' element={<JavaScript/>} ></Route>
            <Route exact path='/react' element={<React_Main/>} ></Route>
            {/* <Route exact path='/react/introduction' element={<React_Intro/>} ></Route>
            <Route exact path='/react/GettingStarted' element={<React_GetStart/>} ></Route> */}
    </Routes>

</BrowserRouter>
    </>
  )
}

export default CodeMind_Main
