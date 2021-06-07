import React, { useState, useEffect } from 'react';
import { 
  Container, 
} from './styles'

const Card = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((serverResponse) => {
      if(serverResponse.ok) {
        return serverResponse.json();
      }
    })
    .then((objectResponse) => {
      console.log(objectResponse);
      setPokemons(objectResponse.pokemon_entries)
    })
  }, []);

  return(
    <Container>
     <ul>
       {pokemons.map((pokemon)=> (
         <li key={pokemon.entry_number}>
           {pokemon.pokemon_species.name}

         </li>
       ))}
     </ul>
    </Container>
  );
}

export default Card;