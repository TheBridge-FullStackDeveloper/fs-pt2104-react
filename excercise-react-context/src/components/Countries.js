import { useContext } from "react";
import { Link } from "react-router-dom";
import context from '../state/context';



const Countries = () => {
    const {countries} = useContext(context);
    
            
    return (
        <section>
            <h1>Listado de paises</h1>
            <ul>
                {countries.map((el,i)=>(
                    <li>
                    
                        <Link to={`/details/${i}`} key={i}>
                            {el.name}
                            <img src={el.flag} alt={el.name}/>
                        </Link>
                    </li>))}
            </ul>
        </section>
        
    ) 
}

export default Countries;