import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#0162b7ff',
  white: '#eef9faff',
  lightBlue: '#9dccfbff',
  darkBlue: '#002a50ff'
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.white};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }

`
