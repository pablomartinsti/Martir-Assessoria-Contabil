import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      margin: 100px 0;
    }
  }
  .section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
`;
