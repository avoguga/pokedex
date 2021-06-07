import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Header,
  InputArea,
  Input,
} from './styles'

const Content = () => {

  return(
    <Container>
      <Header>
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
      </Header>
      <InputArea>
        <i class="fas fa-search"></i>
        <Input placeholder="What Pokémon are you looking for?"/>
      </InputArea>
     
    </Container>
  );
}

export default Content;