import { useEffect, useState } from "react"
import api from "../services/api"

type Pokemon = {
    name: string;
    image: string;
    url: string;
};



const PokeListGrid = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])



    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await api.get(`/pokemon?limit=5&offset=0`)
            setPokemonList(response.data.results)

        }

        fetchPokemons()
    }

        , [])







    return (
        <>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Teste</th>
                </tr>

                <tr>
                    <td>Maria</td>
                    <td>30</td>
                </tr>
                {
                    pokemonList.map((p: Pokemon) => {


                        return (
                            <tr key={p.name}>
                                <td><a href={p.url}>{p.name}</a></td>
                                <td>
                                    <img src={p} alt="" />

                                </td>
                            </tr>
                        )
                    })
                }
            </table>

        </>

    )
}


export default PokeListGrid