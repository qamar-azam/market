import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./theme"

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: ${({ theme }) => theme.font.body};
  }
`
