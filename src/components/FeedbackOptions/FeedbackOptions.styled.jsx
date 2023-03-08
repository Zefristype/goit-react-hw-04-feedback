import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #289be7;
  color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 250ms ease;
  :hover {
    background-color: #085e97;
  }
`;
