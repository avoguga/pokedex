import React from "react";
import {Link} from "react-router-dom"
import { 
  Card,
  CardArea,
  PokemonType,
  PokemonName,
  CardBottom
} from './styles';
import theme from '../../../styles/theme'
import {Pokeball} from '../../../assets/patterns/';

const Pokemon = (props) => {
  const { pokemon } = props;

  let backgroundColor = theme.colors.backgroundType;
     
  return (

    // Cards dos pokemons
  
    <Link to={`pokemon/${pokemon.name}`}>
      <Card color={backgroundColor.grass}>
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
    </Link>
    
  );
};

export default Pokemon;
