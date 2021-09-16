import { useContext } from "react";
import { useParams } from "react-router";
import context from '../../state/context'

const Details = () => {
    const {countries} = useContext(context);
    
    const {id} = useParams();

    console.log(countries[id]);

    console.log('id',id);
}

export default Details;