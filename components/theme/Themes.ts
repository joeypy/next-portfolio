import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bodyBg: 'white',
  headings: '#333',
  text: '#a8a8a8',
  transitionTime: '.25s',
  logo: './logo-dark.svg',
  navbarBottomBg: '#fff',
  activeLink: 'var(--navbar-color-light-active)',
  textGlow: '#818181',
  textColorGlow: 'var(--navbar-color-light-active)',
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#333',
  headings: 'white',
  text: 'white',
  transitionTime: '.25s',
  logo: './logo-light.svg',
  navbarBottomBg: '#444444',
  activeLink: 'var(--navbar-color-dark-active)',
  textGlow: 'var(--text-glow)',
  textColorGlow: 'var(--text-color-glow)',
};
