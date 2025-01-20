import styled from "styled-components";
import img from "../../assets/dicas.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
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
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    padding-bottom: 2rem;
  }
  .box-main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    @media (max-width: 820px) {
      gap: 5rem;
      flex-direction: column;
      align-items: start;
    }
  }

  .icon {
    display: flex;
    gap: 1rem;
    align-items: start;
    justify-content: start;
  }
  .card {
  }
  h1 {
    margin: 5rem 0 8rem 0;
    font-size: 3rem;
    text-align: center;

    @media (max-width: 1180px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    color: #fff;

    @media (max-width: 480px) {
      font-size: 1.24rem;
    }
  }
  p {
    color: #bfbfbf;
    font-size: 1.4rem;
    white-space: pre-line;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;
