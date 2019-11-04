import React, {useState} from 'react';
import './pokemons.css';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
{
  pokemons(first: 50) {
    id
    number
    name
    weight {
      minimum
      maximum      
    }
    height {
      minimum
      maximum
    }
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    image
    attacks {
      special {
        name
        type
        damage
      }
    }
  }
}
`
const Pokemons = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [active, setActive] = useState(1);
    const [pokemonsPerPage] = useState(5);
    const {data, loading, error} = useQuery(GET_POKEMON_INFO);
    if (loading) return (
        <div className="lds-hourglass"></div>
    );
    if (error) return <p>Error</p>;

    const handleClick = (event) => {
        const newPage = Number(event.target.id)
        setCurrentPage(newPage)
        setActive(newPage)
    };
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = data.pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    console.log(currentPokemons);
    const renderPokemons = currentPokemons.map((pokemon, index) => {
        return (
            <div key={index} className="card">
                <img alt='PokemonImage' src={pokemon.image}/>
                <div className="pokemon_details">
                    <div>
                    <h3>{pokemon.name}</h3>
                    <p>
                        {pokemon.types}
                    </p>
                    <br/>
                    <p><strong>Pokemon weight:</strong></p>
                    <p>
                        - min: {pokemon.weight.minimum}
                    </p>
                    <p>
                        - max: {pokemon.weight.maximum}
                    </p>
                    <p><strong>Pokemon height:</strong></p>
                    <p>
                        - min: {pokemon.height.minimum}
                    </p>
                    <p>
                        - max: {pokemon.height.maximum}
                    </p>
                    </div>
                    <div>
                        <p><strong>Special attacks:</strong></p>
                        <div> {pokemon.attacks.special.map(
                            (sa, index) => <p key={index}>{sa.name}</p>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.pokemons.length / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number, index) => {
        return (
            <li
                key={number}
                id={number}
                value={index}
                onClick={handleClick}
                className={active === index + 1 ? 'active' : ''}
            >
                {number}
            </li>
        );
    });

    return (
        <div>
            <h1>Pokemons</h1>
            {renderPokemons}
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        </div>
    );
}

export default Pokemons;
