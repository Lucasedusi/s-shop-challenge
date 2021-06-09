import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto, Helvetica, sans-serif;
  border-bottom: 1px solid #4a6097;
  margin: 10px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const CartInformation = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    font-family: Roboto;
    color: #000000c7;
  }
`;

export const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

export const ButtonLess = styled.div`
  background: #ff6961;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff6961')};
  }
`;

export const ButtonPlus = styled.div`
  background: #37a44e;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  color: #fff;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#37a44e')};
  }
`;
