import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;

  img {
    height: 211px;
  }
`;

export const Section = styled.div`
  width: 358px;
  height: 209px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 30px;
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  a {
    font-size: 16px;

    background: #e8b931;
    color: #fff;
    padding: 10px;
    width: 130px;
    border: 3px solid #e8b931;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background: #000;
  }
  a:active {
    opacity: 0.7;
  }
`;
