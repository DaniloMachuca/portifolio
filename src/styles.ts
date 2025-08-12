import { createGlobalStyle } from 'styled-components'

export const colors = {
  azul: '#0162b7ff',
  branco: '#eef9faff',
  cinza: '#9dccfbff'
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.branco};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`
