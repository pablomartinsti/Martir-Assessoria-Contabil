import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #011d4c;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 0.4rem 2rem;
  }
  img {
    width: 13rem;

    @media (max-width: 480px) {
      width: 9rem;
    }
  }

  .menu-container {
    cursor: pointer;

    .icon {
      @media (max-width: 480px) {
        width: 0.9em;
      }
    }
  }

  .menu-container {
    display: block;
  }
`;
