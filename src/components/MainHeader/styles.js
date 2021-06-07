import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  display: flex;
  justify-content: space-between; 
`;

export const PokeballArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 650px;
    margin-bottom: 120px;
    > svg {
    position: fixed;
    height: 500px;
    width: 500px;
    z-index: -1;

    path {
      fill: #f6f6f6;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  margin: 20px;
  > svg {
    margin-right: 40px;
    cursor: pointer;
  }
`;