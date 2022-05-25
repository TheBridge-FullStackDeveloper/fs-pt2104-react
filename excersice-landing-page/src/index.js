import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json'
import Header from './Header'
import Hero from './Hero'
import Main from "./Main";

const App = () =>{
  return (
    <>
      <Header />
      <Hero />
      <Main />
    </>

  )
};

ReactDOM.render(<App/>, document.getElementById("app"));
