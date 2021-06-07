import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Header = styled.div`
  margin-top: 20px;
  > p{
    margin-top: 10px;
    font-size: 20px;
    color: #747476;
  }
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 500px;
  height: 60px;
  margin-top: 130px;
  margin-right: 30px;
  border-radius: 10px;

  > i{
    cursor: pointer;
  }
`;

export const Input = styled.input`
  background-color: #f2f2f2;
  width: 400px;
  height: 50px;
  padding: 10px;
  font-size: 18px;
`;