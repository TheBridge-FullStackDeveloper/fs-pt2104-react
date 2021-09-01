import React from "react";
import data from '../../data.json';

export default function section1 (){
  return (
    <div>
      <div>
        <h2>{data.header.title}</h2>
        <p>{data.header.subheading}</p>
        <p>{data.header.paragraph}</p>
        <button>{data.header.button}</button>
      </div>
      <div>
        <img alt="" src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60e4408a7bd856103b6000f5_DSC03804%20(2).jpg"/>
      </div>
    </div>
    
  );
};
