import styled from 'styled-components';
import capaContact from '../../assets/contact.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Main = styled.div`
  background: url(${capaContact});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 1200px;
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
    width: 1200px;
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
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin: 80px 0;
  }
`;
