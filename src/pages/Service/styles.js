import styled from 'styled-components';
import capaService from '../../assets/capaService.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  background: url(${capaService});
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
