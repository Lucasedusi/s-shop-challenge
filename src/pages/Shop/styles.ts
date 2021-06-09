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
