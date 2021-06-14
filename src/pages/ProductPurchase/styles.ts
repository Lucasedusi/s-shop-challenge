import styled from 'styled-components';
import { shade } from 'polished';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px;

  h1 {
    text-align: center;
    margin-bottom: 25px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0;
  display: flex;
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  flex-direction: column;

  .breadcrubs {
    margin: 10px 0;

    a {
      color: #8b8e94;
      transition: all, 0.6s;

      &:hover {
        color: ${shade(0.2, '#4a6097')};
      }
    }
  }

  table {
    font-family: Roboto;
    border-collapse: collapse;
    width: 100%;
  }

  th {
    border: 1px solid #fff;
    text-align: left;
    padding: 15px;
    background-color: #4a6097;
    color: #fff;
    width: 200px;
  }

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 15px;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 600;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: -10px 0;
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
    margin-top: 3px;
    border-radius: 5px 0 0 5px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    box-shadow: 1px 1px 8px rgb(0 0 0 / 9%);
  }

  button {
    height: 40px;
    padding: 0 20px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    margin-top: 3px;
    color: #fff;
    font-weight: bold;
    transition: all, 0.6s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
