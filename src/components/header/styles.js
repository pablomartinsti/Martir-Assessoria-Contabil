import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;
export const Section = styled.div`
  width: 1200px;
  color: white;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  img {
    width: 20px;
  }
  .Contact {
    display: flex;
    gap: 100px;

    @media (max-width: 550px) {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    opacity: 0.8;

    a {
      cursor: pointer;
      text-decoration: none;
      color: white;

      @media (max-width: 700px) {
        font-size: 10px;
        margin: 5px 0;
      }
    }
    div:hover {
      opacity: 1;
      scale: 1.1;
    }
    div:active {
      scale: 1;
    }
  }
  .icon {
    display: flex;
    gap: 20px;
    img {
      cursor: pointer;
      opacity: 0.8;
    }
    img:hover {
      scale: 1.1;
      opacity: 1;
    }
    img:active {
      scale: 1;
    }
  }
`;
export const Article = styled.div`
  background: #011d4c;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;

  @media (max-width: 1150px) {
    justify-content: space-between;
    padding: 20px 35px;
  }
  @media (max-width: 770px) {
    justify-content: space-between;
    padding: 20px 10px;
  }
  img {
    width: 300px;
    @media (max-width: 450px) {
      padding-right: 60px;
    }
  }
  nav {
    display: flex;
    align-items: center;
    gap: 100px;
    a {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      color: white;
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;

      span {
        transform: rotate(90deg);
        margin-top: 5px;
      }
    }

    a:hover {
      color: #e8b931;
      scale: 1.1;
    }
    a:active {
      scale: 1;
    }
    @media (max-width: 1150px) {
      display: none;
    }
  }
`;
