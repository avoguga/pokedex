import React from "react";
import Pokemon from "../pokemon/pokemon"
import { 
  Spinner,
  PokemonFlexBox
} from './styles';

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      {loading ? (
        <Spinner/>
      ) : (
        <PokemonFlexBox>
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </PokemonFlexBox>
      )}
    </div>
  );
};

export default Pokedex;
