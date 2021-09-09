import { useState, useEffect } from "react";

const Clock = () =>{
   const [time,setTime]=useState(setTimeNow);
   
//    setInterval(() => {
//        setTime(setTimeNow)
//    }, 1000);

   useEffect(() => {
    setInterval(() => {
      setTime(setTimeNow)
    }, 1000)
  },[time])

   return( <section>
        <p>Hora: {time}</p>
    </section>
   );
   
}

const setTimeNow = () => new Date().toLocaleTimeString();

export default Clock;

