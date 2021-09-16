import { useContext } from "react";
import { useParams } from "react-router";
import context from '../../state/context'

const Details = () => {
    const {countries} = useContext(context);
    
    const {id} = useParams();

    console.log("Pais: ", countries[id]);
    console.log("Pais: ", countries[id].name);

    console.log('id: ',id);

    return(
        <section>
            <h1>Hola</h1>
            <ul>
                <li>{countries[id].name}</li>
                <li><img src={countries[id].flag}/></li>
                <li>{countries[id].capital}</li>
                <li>{countries[id].region}</li>
                <li>
                    <ul>
                        {countries[id].languages.map(el=>(
                            <li>{el.name}</li>))}
                    </ul>
                </li>
                
                {/* <li>{countries[id].currencies}</li> */} 
            </ul>
        </section>
    )
}

export default Details;