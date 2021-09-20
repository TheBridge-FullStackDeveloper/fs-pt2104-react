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
                    pokemons.filter(({name,id,types},i) => {
                            const result = types.filter(el=>{
                                if (!!(el.type.name.includes(search))){
                                    return el.type.name;    
                                } 
                                })
                            if (name.includes(search) || id === parseInt(search) || result.length === 1){
                                return true;
                            }
                            else{
                                
                            }
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