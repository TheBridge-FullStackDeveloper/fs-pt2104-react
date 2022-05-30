import React from 'react';

const Bootcamp = (bootcamp) => {
    return (
      <div style={{ width: '400px' }}>
        <img src={bootcamp.img} style={{ width: '100px' }}></img>
        <p>{bootcamp.title}</p>
        <p>{bootcamp.hours}</p>
        <p>{bootcamp.format}</p>
        <p>{bootcamp.description}</p>
      </div>
    );
  };

  export default Bootcamp;