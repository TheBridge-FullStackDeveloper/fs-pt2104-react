import { useContext } from "react";
import context from '../state/context';

const Country = (props) =>{
    const {countries} = useContext(context);

    const id = props.id;

    return (
        <section>
        <h1>{countries[id].name}</h1>
        <ul className="listCountries">
            {/* <li>{countries[id].name}</li> */}
            <li><img src={countries[id].flag}/></li>
            <li>Capital: {countries[id].capital}</li>
            <li>Región: {countries[id].region}</li>
            <li>Idiomas:
                <ul>
                    {countries[id].languages.map(el=>(
                        <li>{el.name}</li>))}
                </ul>
            </li>
            <li>Moneda:
                <ul>
                    {countries[id].currencies.map(el=>(
                        <li>{el.name}</li>))}
                </ul>
            </li>
        </ul>
    </section>
    );
}

export default Country;