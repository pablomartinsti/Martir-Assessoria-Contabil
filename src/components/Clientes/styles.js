import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    @media (max-width: 1180px) {
      font-size: 1.8rem;
    }
  }

  .box {
    display: flex;
    justify-content: center;
    gap: 10rem;
    padding: 3rem 0;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
  .card {
  }
  h2 {
    color: #fff;
    margin: 1rem 0;
  }
  p {
    color: #bfbfbf;
    line-height: 1.5;
    margin: 1rem 0;
    font-size: 1.4rem;
    white-space: pre-line;
  }
`;
