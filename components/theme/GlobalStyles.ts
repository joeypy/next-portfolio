import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
   }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${(props) => props.theme.bodyBg};
    line-height: 1.5;
    font-size: 1.1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    transition: all ${(props) => props.theme.transitionTime};
    margin: 0;
    /* font-family: 300 11px/1.4, 'Helvetica Neue', 'sans-serif'; */
    overflow: hidden;
    display: block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    color: ${(props) => props.theme.text};
    transition: color ${(props) => props.theme.transitionTime};
  }
  h1 {
    font-size: calc(1.775rem + 1.5vw);
    font-weight: 900;
  }
  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  strong {
    font-weight: 800;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${(props) => props.theme.headings};
    transition: color ${(props) => props.theme.transitionTime};
    font-family: 'Merriweather', serif;
  }
`;
