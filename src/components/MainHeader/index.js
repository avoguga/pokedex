import React from 'react';
import { Container, Welcome } from './styles'
import {Pokeball} from '../../assets/patterns/'
const MainHeader = () => {
  return(
    <Container>
      <div>
        <Pokeball/>
      </div>
      <Welcome></Welcome>
    </Container>
  );
}

export default MainHeader;