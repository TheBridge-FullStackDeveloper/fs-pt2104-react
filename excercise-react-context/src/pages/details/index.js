import { useContext } from "react";
import { useParams } from "react-router";
import context from '../../state/context'
import Country from "../../components/Country"

const Details = () => {
    const {countries} = useContext(context);
    
    const {id} = useParams();

    return(
        <section>
        <Country id={id}></Country>
            {/* <h1>Hola</h1>
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
                <li>
                    <ul>
                        {countries[id].currencies.map(el=>(
                            <li>{el.name}</li>))}
                    </ul>
                </li>
            </ul> */}
        </section>
    )
}

export default Details;