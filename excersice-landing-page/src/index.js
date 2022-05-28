import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json'
import Navbar from './Navbar'
import Body from './Body'
import Bootcamp from './Bootcamp'

const bootcamps = Object.values(data.bootcamps).filter(bootcamp => typeof bootcamp === 'object')
console.log(bootcamps)




const App = (
  <>
    <header>
      <Navbar {...data} />
    </header>
    <Body {...data} />

    <div>
      <p style={{textAlign: "center", padding: "3rem 0 1.5rem"}}>{data.bootcamps.title}</p>
      <h1 style={{padding: "0 0 10px"}}>{data.bootcamps.header}</h1>
      <div style={{display: "flex", flexWrap: "wrap",  justifyContent: "center", padding: "0 50px 0 50px"}}>
        {bootcamps.map(bootcamp => (
          <Bootcamp {...bootcamp} />
        ))}
      </div>
    </div>
  </>
)



ReactDOM.render(
  App,
  document.getElementById("app")
);
