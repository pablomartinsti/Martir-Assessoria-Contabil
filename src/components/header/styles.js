import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  position: fixed;
  z-index: 3;
`;

export const Section = styled.div`
  width: 70%;
  color: white;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 1000px) {
    width: 90%;
  }
  img {
    width: 20px;
  }
  .Contact {
    display: flex;
    gap: 100px;

    @media (max-width: 1000px) {
      gap: 70px;
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
  padding: 20px 0;
  display: flex;
  justify-content: center;
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    img {
      width: 300px;

      @media (max-width: 1250px) {
        width: 250px;
      }
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;
  @media (max-width: 1250px) {
    gap: 50px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    position: absolute;
    top: 156px;
    right: 0;
    background-color: #011d4c;
    width: 100%;
    max-width: ${({ open }) => (open ? '100%' : '0')};
    overflow: hidden;
    transition: max-width 0.3s ease-in-out;
    padding: 50px 0;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: none;

  &:hover {
    color: #e8b931;
    scale: 1.1;
  }

  &:active {
    scale: 1;
  }
`;
