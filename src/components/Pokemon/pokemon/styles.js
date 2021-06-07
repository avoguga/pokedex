import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 334px;
  height: 115px;

  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);

  transition: all ease 0.5s;

  padding: 20px;

  &:hover {
    cursor: pointer;
    border-radius: 15px;
  }

  margin: 30px;
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
`;