import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;
