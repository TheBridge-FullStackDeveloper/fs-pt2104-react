import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json'
import nav from '../src/components/Nav';
import section1 from '../src/components/Sec1';
import section2 from '../src/components/Sec2';

const App = (
  <nav/>
);


// const name = "Manolo la cena te la haces solo"; 

// const element = <h1>{name}</h1>


// function formatName(user) {
//   return user.firstName + ' ' + user.secondName;
// };

// const user = {
//   firstName: 'Manolo',
//   secondName: 'La cena',
// };

// const element2 = (
//   <h1>
//     Hello, {formatName(user)}!  
//   </h1>
// );

// function getGreeting(user) {
//   if (user) {
//     return <h1>getGreeting, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element3 = getGreeting(user);


ReactDOM.render(App, document.getElementById("nav"));
ReactDOM.render(section1(), document.getElementById("sec1"));
ReactDOM.render(section2(), document.getElementById("sec2"));

// ReactDOM.render(App, document.getElementById("app"));
// ReactDOM.render(element, document.getElementById("ejem1"));
// ReactDOM.render(element2, document.getElementById("ejem2"));
// ReactDOM.render(element3, document.getElementById("ejem3"));
