import { useContext } from "react";
import { Link } from "react-router-dom";
import context from '../state/context';



const Countries = () => {
    const {countries} = useContext(context);
    
            
    return (
        <section>
            <h1>Listado de paises</h1>
            <ul className="listCountries">
                {countries.map((el,i)=>(
                    <li>
                    
                        <Link to={`/details/${i}`} key={i} className="listCountry">
                            <span>{el.name}: </span>
                            <img src={el.flag} alt={el.name}/>
                        </Link>
                    </li>))}
            </ul>
        </section>
        
    ) 
}

export default Countries;