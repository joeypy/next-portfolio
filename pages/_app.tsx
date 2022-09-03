import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import 'animate.css';
import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/components/GlobalStyles';
import { ObjectKey, ThemePreferenceContext, themesMap } from '@/app/ThemePreferenceContext';
import { base } from '@/components/theme/Themes';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const themeType = currentTheme as ObjectKey;

  const theme = { ...base, colors: themesMap[themeType] };

  return (
    <>
      <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  );
}

export default MyApp;
