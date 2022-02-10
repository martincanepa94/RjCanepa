//const KEY = '1234'
//const q = 'coderhouse'

import { useEffect, useState } from "react"

//const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${q}&limit=10`
// este es mi endpoint al cual voy a hacer mi peticion
// a partir del ? seran parametros y valores
// los parametros que puedo usar me los indica la siguiente pagina:
// https://developers.giphy.com/docs/api/endpoint#search

//const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/pikachu'

/** fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'POST',
        headers: {
            Authorization: 'TOKEN 12345'
        }, 
        body: JSON.stringify( {
            name: 'Ramiro',
            id: 1455
        })
    })
    .then((res) => console.log(res))
*/

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)


    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }


    useEffect( () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( (resp) => resp.json() )
        .then( (data) => {
            setPokemon(data)
        })

}, [id])

    return (
        <>
        <h2>Poke Api</h2>

        {pokemon &&
            <div>
                <h3>{pokemon?.name}</h3>
                <img src={pokemon?.sprites.front_default} alt={pokemon.name}/>
            </div>
            // Signo de pregunta fuciona como condicional, si existe el objeto pokemon entonces busco
            // la propiedad name.
        }
        
        <hr/>
        <button 
        onClick={handleAnterior}
        className="btn btn-outline-primary mx-3"
        disabled={id === 1}
        >Anterior
            </button>
        <button onClick={handleSiguiente}className="btn btn-primary">Siguiente</button>
        </>
    )
}