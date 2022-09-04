import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'animate.css';
import '../styles/globals.css';
import '@/i18n/i18n';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/components/theme/GlobalStyles';
import { lightTheme, darkTheme } from '@/components/theme/Themes';
import { themeMode, ThemePreferenceContext } from '@/app/ThemePreferenceContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<themeMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme == 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <>
      <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <ThemeProvider theme={currentTheme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  );
}

export default MyApp;
