import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
  }

  html, body, #__next {
    height: 100%;
    touch-action: pan-y pinch-zoom;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .wrapper {
    display: flex;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.base.minimum};
    padding: 20px;
  }
  
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 1024px;
    background-color: ${({ theme }) => theme.colors.base.thin};
  }
`
