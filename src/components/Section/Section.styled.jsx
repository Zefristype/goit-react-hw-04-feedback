import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  padding: 20px;
  width: 700px;
  border: 2px solid black;
  margin: auto;
  margin-top: 100px;
`;
