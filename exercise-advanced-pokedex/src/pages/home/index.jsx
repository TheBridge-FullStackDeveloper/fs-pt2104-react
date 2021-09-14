import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

const Home = () => {
     
    const [pokemons, setPokemons] = useState([]) ;
    const [search, setSearch] = useState([]) ;

    const handlChange = ({target})=>{
        console.log("targer: ", target);
        setSearch(target.value)
    };

    useEffect(() => {
        (async () => {
            const result = (await axios.get(api)).data;
            for await (let pokemon of result.results){
               const itemPokemon = (await axios.get(pokemon.url)).data;
               setPokemons(prev => [...prev,itemPokemon]);
            }
            
        })();
    },[]);
    
    
    return(
    
        <setion>
            <section>
                <input type="text" value={search} onChange={handlChange}></input>
            </section>
            <section>      
                {
                    pokemons.filter(({name,id}) => {
                            console.log("pokemos",typeof(id))
                            console.log("search",typeof(search))
                            return (name.includes(search) || id === parseInt(search))       
                    })
                    .map(({sprites, name},index)=>{
                        return(
                            <section key={index}>
                                <img alt={`foto ${name}`} src={sprites.front_default}/>
                                <p>{name}</p>
                            </section>
                        )
                    })
                }
            </section>
        </setion>
    )
}


export default Home;