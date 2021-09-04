import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json'
import Nav from '../src/components/Nav';
import Section1 from '../src/components/Sec1';
import Section2 from '../src/components/Sec2';




// const App = (
//   <div>
//     <Nav />
//     <Section1 />
//     <Section2 />
//   </div>
// );


// ReactDOM.render(App, document.getElementById("root"));
ReactDOM.render(Nav(), document.getElementById("nav"));
ReactDOM.render(Section1(), document.getElementById("sec1"));
ReactDOM.render(Section2(), document.getElementById("sec2"));


