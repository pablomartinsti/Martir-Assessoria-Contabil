import styled from "styled-components";

export const Container = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .close-button {
    position: absolute;
    top: 0.625rem;
    right: 1.8rem;
    background: none;
    border: none;
    font-size: 2.5rem;
    cursor: pointer;

    @media (max-width: 480px) {
      right: 1rem;
      font-size: 2rem;
      top: 0;
    }
  }
  .modal-content {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    margin-top: 50px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 480px) {
      max-width: 350px;
    }
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
