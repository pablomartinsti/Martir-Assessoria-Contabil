import styled from "styled-components";
import img from "../../assets/contato.jpg";
export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${img}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.1);
    z-index: -3;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 90%;
    padding: 2rem 0;
  }
  img {
    width: 20%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5rem;
  }
  h1 {
    font-size: 3rem;
    white-space: pre-line;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  h2 {
    white-space: pre-line;
    font-weight: 400;
    font-size: 1.4rem;
  }

  .box-button {
    display: flex;
    gap: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      width: 110%;
    }
    @media (max-width: 480px) {
      width: 100%;
      flex-direction: column;
    }
  }
`;
