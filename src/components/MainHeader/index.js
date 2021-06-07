import React from 'react';
import { Container, Icons, PokeballArea } from './styles';
import {Pokeball} from '../../assets/patterns/';

import { ReactComponent as Sort } from '../../assets/icons/sort.svg';
import { ReactComponent as Filter } from '../../assets/icons/filter.svg';
import { ReactComponent as Generation } from '../../assets/icons/generation.svg';

const MainHeader = () => {
  return(
    <Container>
      <PokeballArea>
        <Pokeball/>
      </PokeballArea>
      <Icons>
        <Generation/>
        <Sort/>
        <Filter/>
      </Icons>
    </Container>
  );
}

export default MainHeader;