import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 90px;

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
  }

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 15px;
  }

  /* tr:nth-child(even) {
  background-color: #dddddd;
} */
`;
