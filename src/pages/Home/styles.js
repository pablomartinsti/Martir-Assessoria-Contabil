import styled from 'styled-components';
import homeCapa from '../../assets/imgHome.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Start = styled.div`
  background: url(${homeCapa});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-100px);

  section {
    height: 100%;
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 30px;
    margin-bottom: 250px;
    .title-1 {
      font-size: 60px;
      transform: translateX(-700px);
      opacity: 0;
    }
    .title-2 {
      font-size: 60px;
      transform: translateX(700px);
      opacity: 0;
    }
    .title-3 {
      font-weight: 300;
      margin: 30px 0;
      opacity: 0;
      transform: translateY(50px);
    }
    .title-4 {
      background: #e8b931;
      padding: 20px 50px;
      font-size: 18px;
      border: 3px solid #e8b931;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
      text-decoration: none;
      color: white;
      opacity: 0;

      &:hover {
        background: #000;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
`;
export const About = styled.div`
  width: 100vw;
  min-height: 100vh;
  .title-about {
    margin: 100px 0;
    text-align: center;
  }
  .img {
    width: 450px;
    height: 480px;
  }
  .section {
    display: flex;
    justify-content: center;
    gap: 100px;

    .about {
      display: flex;
      flex-direction: column;
      gap: 50px;

      h3 {
        font-size: 20px;
      }
      p {
        width: 670px;
        line-height: 1.8;
        font-size: 16px;
        text-align: justify;
      }
      a {
        background: #e8b931;
        padding: 20px 50px;
        font-size: 18px;
        border: 3px solid #e8b931;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
        text-decoration: none;
        color: white;
        text-align: center;

        &:hover {
          background: #000;
        }
        &:active {
          opacity: 0.7;
        }
      }
    }
  }
`;
