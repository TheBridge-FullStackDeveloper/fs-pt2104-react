import Clock from '../components/Clock';
import Crono from '../components/Crono';
import { useState, useEffect } from "react";
const App = () => {
  const[clockVisibility,setClockVisibility]=useState(true);
  const Cronometro = () =>{
    console.log('Entro en cronometro');

      
  };
  return (
    <section>
      <Clock/>  
      <button onClick={Cronometro}>Pasar a Cronómetro</button>  
    </section>
  )
};

export default App;