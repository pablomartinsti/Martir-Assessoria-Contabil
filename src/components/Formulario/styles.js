import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Section = styled.div`
  background: black;
  height: 540px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 170px;
`;
export const Article = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1200px;
`;
export const Main = styled.div`
  width: 540px;
  h2 {
    color: #e8b931;
    font-size: 20px;
    margin-top: 115px;
    margin-bottom: 48px;
    width: 100%;
    text-align: start;
  }
  .text {
    margin-bottom: 75px;
    text-align: justify;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
  }

  div {
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-top: 15px;
    img {
      cursor: pointer;
    }
    img:hover {
      scale: 1.1;
    }
    img:active {
      scale: 1;
    }
  }
`;
export const Form = styled.form`
  width: 500px;
  height: 450px;
  margin-top: 115px;
  background: #e8b931;
  border-radius: 10px;
  padding: 31px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
`;
export const Input = styled.input`
  width: 427px;
  height: 41px;
  border-radius: 9px;
  border: none;
  padding: 10px 14px;
`;
export const Textarea = styled.textarea`
  padding: 10px 14px;
  width: 426px;
  height: 127px;
  border-radius: 9px;
  border: none;
`;
export const Button = styled.button`
  width: 427px;
  height: 41px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    scale: 1.05;
    background: #000;
    color: #fff;
  }
  &:active {
    opacity: 0.7;
    scale: 0.9;
  }
`;
