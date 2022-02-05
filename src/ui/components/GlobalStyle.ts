import { theme } from 'config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.white};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.black};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  &::selection {
    color: ${theme.colors.neutral[100]};
    background: ${theme.colors.black};
  }
  html {
    font-size: 62.5%;
  }
`
