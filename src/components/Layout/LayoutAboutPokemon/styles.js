import styled from 'styled-components';

/**
*Layout 
*MH = MainHeader
*CT = Content
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto;
  
  grid-template-areas:
  'MH'
  'CT';

  height: 100vh;
`;
