import React from 'react';
import './index.css';
import Data from "../data.json";
import Cards from "./Cards"

const info = Data.bootcamps
console.log(info)

const Main = () =>{
    return(
        <main>
            <div className='redLine'></div>
            <div className="mainContainer">
                <h4 className="bootCampsTitle">{info.title}</h4>
                <h2 className="bootCampsHeading">{info.header}</h2>
            
                <Cards />
            </div>
      </main>
    );
}

export default Main