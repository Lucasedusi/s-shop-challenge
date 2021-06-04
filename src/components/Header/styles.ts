import styled from 'styled-components';

export const Container = styled.div`
  background: #4a6097;
  padding: 30px 0;
  header {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          .text {
            padding: 16px 24px;
          }
          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;