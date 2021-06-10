import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 334px;
  height: 115px;

  border-radius: 10px;
  background-color: #021;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);

  transition: all ease 0.5s;

  padding: 20px;

  &:hover {
    cursor: pointer;
    border-radius: 15px;

    > img {
      top: -45px;
      -webkit-transition: -webkit-filter 400ms ease;
      transition: all ease 0.4s;
    }
  }

  margin: 30px;

  > img {
    position: absolute;
    right: 0px;
    top: -50px;
    z-index: 10;
    height: 210px;
    width: 210px;
  }

  > svg {
    position: absolute;
    right: 5px;
    top: 0;
    height: 150px;
    width: 150px;
    path {
      fill: #fff;
      opacity: 0.3;
    }
  }
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonType = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
  color: #fff;

`;

export const PokemonName = styled.h3`
  color: #FFF;
  text-transform: capitalize;
`;