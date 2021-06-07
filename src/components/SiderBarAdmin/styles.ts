import styled from 'styled-components';
import { shade } from 'polished';

export const SideBarContainer = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  margin: 40px 30px;
  border-radius: 10px;
  height: 150px;

  h4 {
    text-align: center;
    background-color: #4a6097;
    color: #fff;
    padding: 5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    padding-bottom: 15px;
    color: #3d3d4d;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#4a6097')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 10px 20px;
  flex-direction: column;
`;
