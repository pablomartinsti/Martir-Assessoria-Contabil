import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    transition: 0.5s;
   
    
}
a{
   
    &:hover {
   
    scale: 1.03;
  }
  &:active {
    opacity: 0.7;
    scale: 0.9;
  }
    }

`;
