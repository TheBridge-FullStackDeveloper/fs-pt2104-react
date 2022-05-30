import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from '../data.json';
import Navbar from './Navbar';
import MenuLeft from './MenuLeft';
import Bootcamp from "./Bootcamp";

const bootcamps = Object.values(data.bootcamps).filter(elem => typeof elem === 'object');

const Bootcamps = () => {
  return (
    <div style={{ margin: '0 4%' }}>
      <p>{data.bootcamps.title}</p>
      <h1>{data.bootcamps.header}</h1>
      <div 
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around'
        }}
        >
        {bootcamps.map((bootcamp) => (
          <Bootcamp {...bootcamp} />
        ))}
      </div>
      </div>
      );
      };

      const App = (
      <div>
        <Navbar />
        <MenuLeft />
        <Bootcamps />
      </div>
  );

  ReactDOM.render(App, document.getElementById("app"));
