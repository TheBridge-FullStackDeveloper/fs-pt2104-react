import React from "react";
import data from '../../data.json';


export default function nav(){
  return (
    <div>
      <img alt="logo" src={data.navbar.img} id="logo" class="image-2"></img>
      <ul className="rowli">
      {data.navbar.links.map(link =><li><a href="#">{link}</a></li>)}
      </ul>
    </div>
  );
};