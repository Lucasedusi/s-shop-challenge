import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { shade } from 'polished';

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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

export const StyledButton = styled(IconButton)`
  right: 100px;
  top: 105px;
  height: 30px;
  width: 50px;
  border-radius: 5px !important;
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0 0;
`;

export const Form = styled.form`
  display: flex;
  margin: -95px 80px 0 0;

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
    height: 40px;
    padding: 0 20px;
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
