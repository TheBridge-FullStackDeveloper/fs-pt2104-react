import React from "react";
import data from '../../data.json';

const Card = (props) => {
   return(
    <div>
       <h3>{props.bootcamps.title}</h3>
            <img src={props.bootcamps.img} alt="Logo CIB"/>
            <div>{props.bootcamps.hours}</div>
            <div>{props.bootcamps.format}</div>
            <p>{props.bootcamps.description}</p>
    </div>
   );
    
}

function Section2 (){
    // const bootTypes = ["data.bootcamps.cs","data.bootcamps.ds","data.bootcamps.fs","data.bootcamps.dm","data.bootcamps.ux"];
    // {bootTypes.map(boot=><Card bootcamps={boot}  />)}
  return (
    <div>
        <p>{data.bootcamps.header}</p>
        <h2>{data.bootcamps.title}</h2>
        <Card bootcamps={data.bootcamps.cs}/>
        <Card bootcamps={data.bootcamps.ds}/>
        <Card bootcamps={data.bootcamps.fs}/>
        <Card bootcamps={data.bootcamps.dm}/>
        <Card bootcamps={data.bootcamps.ux}/>
    </div>
  );
};
export default Section2;