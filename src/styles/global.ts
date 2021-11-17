import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Proxima Nova Light'), local('Proxima-Nova-Light'),
        url('/fonts/proximanova-light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Proxima Nova'), local('Proxima-Nova-Regular'),
        url('/fonts/proximanova-regular.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      min-height: 100vh;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
