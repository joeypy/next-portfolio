import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyBg?: string;
    text?: string;
    headings?: string;
    transitionTime?: string;
  }
}
