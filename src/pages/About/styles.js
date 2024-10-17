import styled from 'styled-components';
import capaSobre from '../../assets/capaSobre.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  background: url(${capaSobre});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  transform: translateY(-100px);
  opacity: 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 70%;
  }
  .text {
    font-size: 96px;
    text-align: center;
    color: #fff;
    letter-spacing: 15px;
    line-height: 150px;
    filter: drop-shadow(2px 4px 6px black);
    transform: translateX(-400px);
    opacity: 0;
  }
  .text-1 {
    font-size: 96px;
    text-align: center;
    color: #fff;
    letter-spacing: 15px;
    line-height: 150px;
    filter: drop-shadow(2px 4px 6px black);
    transform: translateX(400px);
    opacity: 0;
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;
export const Div = styled.div`
  background: #011d4c;
  color: #fff;
  width: 340px;
  height: 375px;
  border-radius: 32px 32px 0 0;
  padding: 20px;
  margin-top: -100px;
  p {
    text-align: center;
    font-size: 20px;
    margin-top: 60px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h3 {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;

export const Article = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 80px;
  .container {
    display: flex;
    gap: 50px;

    p {
      width: 550px;

      text-align: justify;
      font-size: 18px;
      margin-top: 50px;
      margin-bottom: 70px;
    }
    a {
      background: #e8b931;
      border: 3px solid #e8b931;
      padding: 12px 58px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
    }
    a:hover {
      background: #000;
      scale: 1.05;
    }
    a:active {
      opacity: 0.7;
      scale: 0.9;
    }
    img {
      width: 550px;
      height: 515px;
    }
  }
`;
