import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Roboto', sans-serif; /* Fonte para h1 */
    font-weight: 700; /* Peso mais forte */
    color: #FFFFFF;
    
  }

  /* Outros títulos (se desejar personalizar mais) */
  h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: #BFBFBF;
  }
  p{
    line-height: 1.5rem;
  }

  /* Links e botões podem seguir a fonte global */
  a, button {
    font-family: 'Montserrat', sans-serif;
  }

`;
