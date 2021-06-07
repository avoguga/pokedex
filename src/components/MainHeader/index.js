import React from 'react';
import { Container, Welcome } from './styles'
import pokeball from '../../assets/patterns/pokeball.svg'
const MainHeader = () => {
  return(
    <Container>
      <img src={pokeball}/>
      <Welcome>icon icon icon</Welcome>
    </Container>
  );
}

export default MainHeader;