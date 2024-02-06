import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    width: 100%;
    background-color: #555555;
  }
`;
