import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  button {
    border-radius: 0 0 10px 10px;
  }
  .btn-cart {
    background-color: #4a6097;
    font-size: 16px;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#4a6097')};
    }
  }

  .icon-cart {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  font-family: Roboto, sans-serif;
  padding: 20px;
  height: 100%;

  p {
    color: #00000082;
  }

  .price {
    color: #39b100;
  }
`;
