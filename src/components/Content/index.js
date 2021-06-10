import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Header,
  NotFound
} from './styles';
import { getPokemonData, getPokemons, searchPokemon } from "../../services/api";
import Search from "../Search";
import Pokedex from "../Pokemon/pokedex/pokedex";


const Content = () => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  
  const fetchPokemons = async () => {
    try {
      setLoading(true);

      // Aqui está settado no maximo 150 pokemons por pagina. 

      const data = await getPokemons(150, 150 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
    }
    setLoading(false);
    setSearching(false);
  };
  return(
    <Container>
      <Header>
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
      </Header>
      <Search onSearch={onSearch} />
          {notFound ? (
            <NotFound>
              Pokemon not found!
            </NotFound>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
            />
          )}
     
    </Container>
  );
}

export default Content;