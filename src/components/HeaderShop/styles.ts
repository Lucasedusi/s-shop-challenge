import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #4a6097;
  padding: 30px 0;
  header {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
    font-weight: 600;
    color: #292929;
    font-size: 16px;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 1px solid #fff;
    border-right: 0;
  }

  button {
    width: 210px;
    height: 40px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: all, 0.6s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
