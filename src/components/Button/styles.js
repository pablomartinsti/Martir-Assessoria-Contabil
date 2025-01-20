import styled from "styled-components";

export const Container = styled.div`
  button,
  a {
    background-color: #d7bb65;
    max-width: 27rem;
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: 500;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    width: 100%;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    &:hover {
      border: 2px solid #fff;
    }
    &:active {
      color: #fff;
      background-color: #000;
    }
  }
`;
