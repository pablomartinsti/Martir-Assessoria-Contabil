import styled from 'styled-components';

export const Container = styled.div`
  div {
    width: 1200px;
    margin-top: 50px;
    background: black;
    color: #fff;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding: 30px 150px;
    margin: 70px 0;

    h3 {
      width: 700px;
      font-weight: 500;
    }
    a {
      background: #e8b931;
      padding: 20px;
      font-weight: 500;
      border: 2px solid #e8b931;
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
    a:hover {
      background: transparent;
    }
    a:active {
      opacity: 0.7;
    }
  }
`;
