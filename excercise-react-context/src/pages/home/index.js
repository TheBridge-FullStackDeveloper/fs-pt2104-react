import { useContext } from "react";
import context from '../../state/context';
const Home = () => {
    const {countries} = useContext(context);
    console.log("Countries Home:",countries[0][0]);
    // console.log("Countries longitud:",countries[0][0].length);
    
    return (
        <section>
        <h1>{countries[0][0].name}</h1>
        <h1>Hola</h1>
        </section>
        
    ) 
}

export default Home;