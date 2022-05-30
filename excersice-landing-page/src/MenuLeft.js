import React from 'react';
import data from '../data.json'

const MenuLeft = () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <h1>{data.header.title}</h1>
          <h3>{data.header.subheading}</h3>
          <p>{data.header.paragraph}</p>
          <button 
          style={{ backgroundColor: 'red', color: 'white', border: 0, padding: '8px', borderRadius: '10px'}}>{data.header.button}</button>
          </div>
        <div style={{ width: '50%' }}>
          <img style={{ objectFit: 'cover', height: '420px'}}src='https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60e4408a7bd856103b6000f5_DSC03804%20(2)-p-1600.jpeg'></img></div>
      </div>
  )}

export default MenuLeft;