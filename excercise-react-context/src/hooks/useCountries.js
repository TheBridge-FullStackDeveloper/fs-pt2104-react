import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://restcountries.eu/rest/v2/all";

const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = (await axios.get(api)).data;
            setCountries(prev => [...prev, ...result]);
            
        })();
    },[]);

    // return [countries,setCountries];
    return countries;
}

export default useCountries;