import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px;
`;


export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;
