import React from "react";
import { 
  Card,
  CardArea,
  PokemonType
} from './styles';

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <Card>
      <CardArea>
          <div>#{pokemon.id}</div>
          <h3>{pokemon.name}</h3>
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <PokemonType key={idx}>
                  {type.type.name}
                </PokemonType>
              );
            })}
        </div>
      </CardArea>
      <div>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
    </Card>
  );
};

export default Pokemon;
