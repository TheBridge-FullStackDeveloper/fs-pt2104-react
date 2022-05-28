import React from 'react';

const Body = (props) => {
    return (
      <div className="main" style={{display: "flex"}}>
        <div  style= {{width: "50%", display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
          <h1 style= {{width: "70%"}}>{props.header.title}</h1>
          <h3 style= {{width: "70%"}}>{props.header.subheading}</h3>
          <p style= {{width: "70%"}}>{props.header.paragraph}</p>
          <button>{props.header.button}</button>
        </div>
        <div style= {{maxWidth: "50%"}}>
        <img 
        style= {{objectFit: "contain", height: "450px"}} 
        src={props.header.img} 
        alt="Estudiantes en el campus estudiando en la terraza" />
        </div>
      </div>
    )
  };

export default Body;