import styled from 'styled-components';
import { shade } from 'polished';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 10px;

  .name {
    font-size: 28px;
    font-weight: 500;
    color: #3d3d4d;
  }

  .description {
    font-size: 18px;
    font-weight: 500;
    color: #3d3d4d;
  }

  .price {
    font-size: 25px;
    font-weight: 500;
    color: #39b100;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #39b100;
`;

export const FooterQtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 8px;
    border: 0;
    background: #4a6097;
    color: #fff;
    padding: 5px 10px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#4a6097')};
    }
  }

  input {
    width: 30px;
    margin: 0 10px;
    border: 0;
    box-shadow: 2px 2px 10px 1px rgb(0 0 0 / 8%);
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;
  padding: 5px 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#39b100')};
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
