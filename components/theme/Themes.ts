import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bodyBg: 'white',
  headings: '#333',
  text: '#818181',
  transitionTime: '.25s',
  logo: './logo-dark.svg',
  navbarBottomColor: '#fff',
  activeLink: 'var(--navbar-color-light)',
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#333',
  headings: 'white',
  text: '#c1c1c1',
  transitionTime: '.25s',
  logo: './logo-light.svg',
  navbarBottomColor: '#444444',
  activeLink: 'var(--navbar-color-dark)',
};
