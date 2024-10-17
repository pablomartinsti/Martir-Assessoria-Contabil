import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Section = styled.div`
  background: #011d4c;
  height: 390px;
  display: flex;
  justify-content: space-around;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 70px;

  .logo {
    width: 250px;
  }
  h4 {
    font-size: 10px;
    width: 138px;
    color: #e8b931;
  }
  .social {
    text-align: center;
    padding-left: 60px;
  }
  .icon {
    width: 24px;
    height: 24px;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
    &:active {
      scale: 1;
    }
  }

  h3 {
    color: #fff;
  }
  a {
    color: #aeaeae;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    opacity: 0.8;
  }

  .contact {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
`;
export const Article = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;
