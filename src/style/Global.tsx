import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { CrystalTheme } from '@crystals/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends CrystalTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
    font-weight: 100;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.gradients.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  #hvr-float {
    vertical-align: middle;
    transition: box-shadow 2s ease 1s, transform 0.5s ease 0s;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
  }
  #hvr-float:hover,
  #hvr-float:focus,
  #hvr-float:active {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`

export default GlobalStyle
