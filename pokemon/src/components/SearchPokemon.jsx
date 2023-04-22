import React, { useState } from 'react'
import axios from 'axios'


function SearchPokemon() {

    const [pokemonName, setPokemonName] = useState();
    const [pokemon, setPokemon] = useState({})

    const search = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response) => {
                console.log(response.data);
                setPokemon({
                    name: response.data.species.name,
                    id: response.data.id,
                    img: response.data.sprites.front_default
                })
            }
        )
    }

    // search();



    return (
        <>
            <div className='search'>
                <h1>Search Pokemon</h1>
                <input
                    onChange={(event) => setPokemonName(event.target.value)}
                    value={pokemonName}
                    placeholder='search by id or name' />
                <button
                    onClick={() => search()}
                >Search Pokemon</button>
            </div>

            <div className='details'>
                <h1>{pokemon.name}</h1>
                <h3>{pokemon.id}</h3>
                <img src={pokemon.img} alt="" />

            </div>

        </>
    )
}


export default SearchPokemon

