import { useEffect, useState } from "react"
import api from "../services/api"

type Pokemon = {
    name: string;
    url: string;
    sprite: string,
};



const PokeListGrid = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])



    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await api.get(`/pokemon?limit=9&offset=0`)
            setPokemonList(response.data.results)
            pokemonList.map((pokemon) => {
                const url = pokemon.url;
                const parts = url.split("/");
                const id = parts[parts.length - 2];
                
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="" />
                    
            })
        }
        
        fetchPokemons()
    }
    
    , [])
    

    return (
        <div>
          {pokemonList ?
            pokemonList.map((pokemon) => {
              const id = pokemon.url.split("/").filter(Boolean).pop();
              return (
                <div key={pokemon.name} style={{ textAlign: "center", margin: "10px" }}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={pokemon.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p>{pokemon.name}</p>
                </div>
              );
            }): null}
        </div>
      );
}


export default PokeListGrid;