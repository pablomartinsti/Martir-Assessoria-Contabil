import styled from "styled-components";
import img from "../../assets/img.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(60px + 100vh);
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
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  main {
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: space-evenly;
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: first baseline;
    h1 {
      font-size: 3rem;
      white-space: pre-line;
      line-height: 1.5;

      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }
    h2 {
      white-space: pre-line;
      margin: 4rem 0;
      font-weight: 400;
      line-height: 1.5;
      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }

    p {
      color: #fff;
      font-size: 1.5rem;
      margin-top: 3rem;
      font-weight: bold;
      color: #bfbfbf;
      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
  }
`;
export const Aside = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
  .modal-content {
    width: 100%;
    max-width: 25rem;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h2 {
      color: #000;
    }
    p {
      margin: 10px 0;
      color: rgba(0, 0, 0, 0.57);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 3px;
    color: #000;

    input,
    textarea {
      font-size: 16px;
      margin: 5px 0;
      border-radius: 5px;
      padding: 10px 0 10px 10px;
      border: 1px solid black;
      text-transform: capitalize;
    }

    input {
      height: 45px;
    }
  }
`;
