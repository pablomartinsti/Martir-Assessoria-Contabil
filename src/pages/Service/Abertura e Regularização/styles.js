import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 100px;
  margin-bottom: 30px;
  gap: 100px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  a {
    font-size: 16px;
    margin-top: 15px;
    background: #e8b931;
    color: #fff;
    padding: 10px;
    width: 250px;
    border: 3px solid #e8b931;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
  a:hover {
    background: #000;
  }
  a:active {
    opacity: 0.7;
  }
  p {
    text-align: justify;
    line-height: 1.8;
  }
`;

export const Article = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 50px 0;
  background: #f5f5f5;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    width: 280px;

    padding: 25px 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    border-radius: 10px 10px 0 0;
    background: #ffffff;
  }
`;
