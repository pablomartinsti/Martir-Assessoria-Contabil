import styled from "styled-components";

export const Container = styled.div`
  background: #1b1b1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media (max-width: 1180px) {
    flex-direction: column;
  }

  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    white-space: pre-line;
    text-align: start;

    @media (max-width: 1180px) {
      font-size: 2rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin: 2rem 0;
    }
  }
  img {
    width: 35%;
    height: 100vh;

    @media (max-width: 1180px) {
      width: 100vw;
      height: auto;
    }
  }

  .box-conteudo {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  }
  .section {
    display: flex;
    max-width: 100%;
    justify-content: center;

    @media (max-width: 480px) {
      display: block;
    }
  }
  .conteudo {
    max-width: 24rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    margin: 4rem;
    @media (max-width: 480px) {
      margin: 1.8rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
      white-space: pre-line;

      @media (max-width: 480px) {
        font-size: 1.24rem;
      }
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: #bfbfbf;
      max-width: 20rem;
    }

    .icon {
      display: flex;
      align-items: center;
    }
  }
`;
