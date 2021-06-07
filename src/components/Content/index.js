import React, { useState, useEffect } from 'react';
import { 
  Container, Header,
} from './styles'

const Content = () => {

  return(
    <Container>
      <Header>
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
      </Header>
     
    </Container>
  );
}

export default Content;