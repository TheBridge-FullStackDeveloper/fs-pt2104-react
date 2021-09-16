// import { useContext } from "react";
// import context from '../../state/context';
import Countries from '../../components/Countries';
// import { Link } from "react-router-dom";
const Home = () => {
    // const {countries} = useContext(context);
    // console.log("Countries Home:",countries[0][0]);
    // console.log("Typeof", typeof(countries[0]));
    // console.log("Countries longitud:",countries[0][0].length);
    
    return ( 
        <div><Countries/></div>
        
    ) 
}

export default Home;