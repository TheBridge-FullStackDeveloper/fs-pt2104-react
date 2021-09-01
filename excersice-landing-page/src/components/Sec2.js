import React from "react";
import data from '../../data.json';


export default function section2 (){
  return (
    <div>
        <p>{data.bootcamps.header}</p>
        <h2>{data.bootcamps.title}</h2>
        <div>
            <h3>{data.bootcamps.cs.title}</h3>
            <img src={data.bootcamps.cs.img} alt="Logo CIB"/>
            <div>{data.bootcamps.cs.hours}</div>
            <div>{data.bootcamps.cs.format}</div>
            <p>{data.bootcamps.cs.description}</p>
        </div>
        <div>
            <h3>{data.bootcamps.ds.title}</h3>
            <img src={data.bootcamps.ds.img} alt="Logo CIB"/>
            <div>{data.bootcamps.ds.hours}</div>
            <div>{data.bootcamps.ds.format}</div>
            <p>{data.bootcamps.ds.description}</p>
        </div>
        <div>
            <h3>{data.bootcamps.fs.title}</h3>
            <img src={data.bootcamps.fs.img} alt="Logo CIB"/>
            <div>{data.bootcamps.fs.hours}</div>
            <div>{data.bootcamps.fs.format}</div>
            <p>{data.bootcamps.fs.description}</p>
        </div>
        <div>
            <h3>{data.bootcamps.dm.title}</h3>
            <img src={data.bootcamps.dm.img} alt="Logo CIB"/>
            <div>{data.bootcamps.dm.hours}</div>
            <div>{data.bootcamps.dm.format}</div>
            <p>{data.bootcamps.dm.description}</p>
        </div>
        <div>
            <h3>{data.bootcamps.ux.title}</h3>
            <img src={data.bootcamps.ux.img} alt="Logo CIB"/>
            <div>{data.bootcamps.ux.hours}</div>
            <div>{data.bootcamps.ux.format}</div>
            <p>{data.bootcamps.ux.description}</p>
        </div>
    </div>
  );
};