import styled from "styled-components";

export const Container = styled.header`
  background: #1b1b1e;
  width: 100vw;
  min-height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 5rem 2rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin: 5rem 0;
    color: #ffd700; /* Dourado */
  }

  h2 {
    font-size: 2rem;
    white-space: pre-wrap;

    color: #ddd;
    line-height: 1.7;
  }

  .botoes {
    margin: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;
