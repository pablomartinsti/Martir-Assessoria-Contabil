import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin: 160px 0;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 130px;
  width: 1200px;
`;
export const Article = styled.div`
  width: 700px;
  height: 910px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  img {
    width: 700px;
    height: 440px;
  }
  p {
    font-size: 16px;
    line-height: 1.8;
    text-align: justify;
    width: 85%;
  }

  a {
    background: #e8b931;
    padding: 5px;
    width: 90%;
    text-align: center;
    font-size: 25px;
    border: 3px solid #e8b931;
    cursor: pointer;
    margin-top: 60px;
    color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
  a:hover {
    background: #000;
  }
  a:active {
    opacity: 0.7;
  }
`;
export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
