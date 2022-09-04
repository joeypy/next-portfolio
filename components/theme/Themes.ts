import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bodyBg: 'white',
  headings: '#333',
  text: '#818181',
  transitionTime: '.25s',
  logo: './logo-dark.svg',
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#333',
  headings: 'white',
  text: '#c1c1c1',
  transitionTime: '.25s',
  logo: './logo-light.svg',
};
