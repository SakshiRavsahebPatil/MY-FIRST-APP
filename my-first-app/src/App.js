import logo from './logo.svg';
import React , {Fragment}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentBasic/Header';
import Body from './componentBasic/Body';
import JsxComponent from './componentBasic/JsxComponent';
import MyComponent from './componentBasic/MyComponent';
import MyClassComp from './componentBasic/MyClassComp';
import Welcome from './Welcome';
import ClassCompBody from './ClassCompBody';
import JSXTest from './JsxTest/JSXTest';
import FragmentTest from './FragmentTest/FragmentTest';
import WelcomeCompCall from './ComCall/Welcome';
import ParentComp from './PropsTest/ParentComp';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import StateInClassComp from './StateInClassComp/StateInClassComp';
import StateInFunComp from './StateInClassComp/StateInFunComp';
import Main from './RoutingTest/Main'
import LifeCycleMethod from './ClassCompLifeCycle/LifeCycleMethod';
import APIIntUsingFetch from './APIIntegratiion/APIIntUsingFetch';
import APIIntUsingAxios from './APIIntegratiion/APIIntUsingAxios';
import UserEffectHook from './APIIntegratiion/UserEffectHook';
import UseEffectAPICall from './APIIntegratiion/UseEffectAPICall';
import NormalComp from './PureComp/NormalComp';
import PureComp from './PureComp/PureComp';
import Parent_PTC from './ChildToParentCall/Parent_PTC';
import ParentCallback from './ChildToParentCall/ParentCallback';
import FormBasic from './FormHandling/FormBasic';


function App() {
  return (
 
    <>
      {/* <Header/> */}

      {/* <Body/> */}

      {/* <JsxComponent/> */}
      {/* <MyComponent/>

      <MyClassComp/> */}
      {/* <Welcome/> */}

      {/* <ClassCompBody/> */}

       {/* <JSXTest/> */}

       {/* <FragmentTest/> */}

       {/* <WelcomeCompCall/> */}

       {/* <ParentComp/> */}

       {/* <ConditionalRendering/> */}

       {/* <StateInClassComp/> */}

       {/* <StateInFunComp/> */}

       {/* <Main/> */}

       {/* <LifeCycleMethod/> */}

       {/* <APIIntUsingFetch/> */}

       {/* <APIIntUsingAxios/> */}

       {/* <UserEffectHook/> */}

       {/* <UseEffectAPICall/> */}

       {/* <NormalComp/> */}

       {/* <PureComp/> */}

       {/* <Parent_PTC/> */}

       {/* <ParentCallback/> */}

       <FormBasic/>
    </>
  );
}

export default App;
