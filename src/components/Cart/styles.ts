import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  width: 500px;
`;

export const HeaderCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
  background-color: #4a6097;
  margin-bottom: 20px;
`;

export const BodyCart = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;

  h2 {
    text-align: right;
    margin: 10px 10px;
  }
`;
