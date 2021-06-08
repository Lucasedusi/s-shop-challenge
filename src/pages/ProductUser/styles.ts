import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px;
`;

export const Products = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterQtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;
  padding: 5px;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;
