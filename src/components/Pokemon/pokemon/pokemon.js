import React from "react";
import { 
  Card,
  CardArea,
  PokemonType,
  PokemonName,
  CardBottom
} from './styles';
import {Pokeball} from '../../../assets/patterns/';

const Pokemon = (props) => {
  const { pokemon } = props;

  return (

    // Cards dos pokemons

    <Card color={pokemon.type}>
      <CardArea>
          <div>#{pokemon.id}</div>
          <PokemonName>{pokemon.name}</PokemonName>
          <CardBottom>
            {pokemon.types.map((type, idx) => {
              return (
                <PokemonType key={idx}>
                  {type.type.name}
                </PokemonType>
              );
            })}
          </CardBottom>
      </CardArea>
        <Pokeball/>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
    </Card>
  );
};

export default Pokemon;
