import React from "react";
import data from '../../data.json';


export default function nav(){
  return (
    <div>
      <img alt="logo" src={data.navbar.img}></img>
      <ul>
      {data.navbar.links.map(link =><li><a href="#">{link}</a></li>)}
      </ul>
    </div>
  );
};