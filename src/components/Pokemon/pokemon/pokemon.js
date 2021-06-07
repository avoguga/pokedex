import React from "react";
import { 
  Card,
  CardArea,
  PokemonType
} from './styles';

const Pokemon = (props) => {
  const { pokemon } = props;
  
  //Função para deixar a primeira letra maiscula
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  }

  return (
    <Card>
      <CardArea>
          <div>#{pokemon.id}</div>
          <h3>{pokemon.name.capitalize()}</h3>
          <div>
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
