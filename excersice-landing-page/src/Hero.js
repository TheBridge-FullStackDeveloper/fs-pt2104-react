import React from "react"
import "./index.css"
import Data from "../data.json"

const header = Data.header

const Hero = () =>{
    return(
        <section className="heroHome">
            <div className="heroHomeCol bg1">
                <div className="heroTextContainer">
                    <h1>{header.title} <span>.</span></h1>
                    <h2>{header.subheading}</h2>
                    <p>{header.paragraph}</p>
                    <div className="buttonHero">{header.button}</div>
                </div>
            </div>
            <div className="heroHomeCol bg2">
                <img     
                    src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60e4408a7bd856103b6000f5_DSC03804%20(2)-p-1600.jpeg"
                    alt="Logo"
                />
            </div>
        </section>
    );
}

export default Hero