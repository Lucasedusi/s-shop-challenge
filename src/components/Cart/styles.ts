import styled from 'styled-components';
import { shade } from 'polished';

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

  input {
    margin: 40px 0 0 0;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ddd;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px #04d361;
    }
  }

  h2 {
    text-align: right;
    margin: 10px 10px;
  }

  button {
    height: 40px;
    margin: 30px 0;
    background-color: #4a6097;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: all, 0.6s;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#4a6097')};
    }
  }
`;
