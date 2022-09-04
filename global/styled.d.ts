import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyBg?: string;
    text?: string;
    headings?: string;
    transitionTime?: string;
    logo?: string;
    navbarBottomBg?: string;
    activeLink?: string;
    textGlow?: string;
    textColorGlow?: string;
  }
}
