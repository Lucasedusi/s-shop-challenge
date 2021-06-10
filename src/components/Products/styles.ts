import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button.icon-delete {
        background: #ff6961;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#ff6961')};
        }

        svg {
          color: #fff;
        }

        & + button {
          margin-left: 6px;
        }
      }

      button.icon-edit {
        background: #37a44e;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#37a44e')};
        }

        svg {
          color: #fff;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }
  }
`;
