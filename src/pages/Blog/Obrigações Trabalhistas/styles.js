import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  h1 {
    margin-top: 100px;
    text-align: center;
  }
  div {
    width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      margin: 50px 0;
    }
    h2 {
      text-align: center;
    }
    ul {
      padding-left: 20px;
    }
    p,
    li {
      margin: 20px 0;
    }
  }
`;
