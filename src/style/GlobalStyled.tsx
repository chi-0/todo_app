import { createGlobalStyle } from "styled-components";
import { COLOR_PICK } from "./colorPick";

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
    background-color: ${COLOR_PICK.grayColor};
    color: ${COLOR_PICK.textColor};
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -1.5px;
  }
`;
