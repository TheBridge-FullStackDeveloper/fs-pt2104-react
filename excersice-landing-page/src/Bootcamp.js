import React from 'react';

const Bootcamp = (bootcamp) => {
    return (
      <div style={{ width: "250px", boxShadow: "1px 1px 10px -5px #000", borderRadius: "8px", margin: "20px 9px"}}>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
        <h3 style={{padding: "1rem 0 0 1rem"}}>{bootcamp.title}</h3>
        <img src={bootcamp.img} alt="Logo"style={{ width: "80px", top: "-10px"}} />
        </div>
        <p>{bootcamp.hours}</p>
        <p>{bootcamp.format}</p>
        <p>{bootcamp.description}</p>
      </div>
    )
  }

  export default Bootcamp