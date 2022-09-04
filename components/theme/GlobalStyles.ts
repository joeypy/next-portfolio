import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 4.8rem;
    
    --normal-font-size: 1.4rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
    --tiny-font-size: 1rem;

    --icon: 1.5rem;

    --hue: 100;
    --hue-dark: 210;
    --hue-light: 220;
    --sat: 50%;
    --lig: 15%;
    --lig-dark: 100%;
    --font-color-dark: #fff;
    --navbar-color-light: #444444;
    --navbar-color-dark: #fff;
    --navbar-color-light-active: hsl(var(--hue-light), var(--sat), var(--lig));
    --navbar-color-dark-active: hsl(var(--hue-dark), var(--sat), var(--lig-dark));
    --text-color-glow:#eff7ff;
    --text-glow: 
      0 0 7px #eff7ff,
      0 0 10px #eff7ff, 
      0 0 21px #7ed8fc, 
      0 0 42px #7ed8fc, 
      0 0 82px #7ed8fc;
  }
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
    font-size: 1.6rem;
    font-family: 'Open Sans', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
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

  .active-link {
    position: relative;
    color: ${(props) => props.theme.activeLink};
    transition: .3s
  }
  @media (min-width: 767px) {
    .active-link::before {
      content: '';
      position: absolute;
      bottom: .15rem;
      width: 4px;
      height: 4px;
      color: ${(props) => props.theme.activeLink};
      background: ${(props) => props.theme.activeLink};
      background-color: ${(props) => props.theme.activeLink};
      border-radius: 50%;
      transition: .3s;
    }
  }

`;
