import styled from 'styled-components';

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 500px;
  height: 60px;
  margin-top: 100px;
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
