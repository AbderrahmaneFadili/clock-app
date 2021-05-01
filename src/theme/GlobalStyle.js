import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
      padding:0;
      margin:0;
      box-sizing:border-box;
      font-family: 'Poppins', sans-serif;
      
  }


`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export default GlobalStyle;
