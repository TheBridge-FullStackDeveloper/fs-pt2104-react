import React from "react";
import "./index.css";
import Data from '../data.json'

let bootcamps = Data.bootcamps;
const {header, title, ...rest} = bootcamps

bootcamps = Object.entries(rest)

//console.log(rest)


const Cards = () => {
    return (
        <div className="cardContainer">
           {bootcamps.map((item) => (
            <div className="bootcampCard">
                <img
                    src={item[1].img}
                    alt="Logo"
                    className="cardIcon"
                />
                <h3>{item[1].title}</h3>
                <div className="timeMethod">
                    <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>{item[1].hours}</div>
                    <div className="method"><p>{item[1].format}</p></div>
                </div>
                <p className="cardInfo">{item[1].description}</p>
                <div className="cardCta">+ Info</div>
            </div>
        ))}
        </div>
    );
  };

  export default Cards;

  /* <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
        </div>


            <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
            </div>

            <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
            </div>

            <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
            </div>

            <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
            </div>

            <div className="bootcampCard">
            <img
                src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"
                alt="Logo"
                className="cardIcon"
            />
            <h3>Ciberseguridad</h3>
            <div className="timeMethod">
                <div className="time"><img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"/>480</div>
                <div className="method"><p>Presencial / Remoto</p></div>
            </div>
            <p className="cardInfo">Aprenderás a implantar sistemas Cloud Computing y además te especializaras en el entorno de las DevOps, un puesto altamente demandado por las empresas de todo el mundo.</p>
            <div className="cardCta">+ Info</div>
            </div>*/