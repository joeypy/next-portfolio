import React from 'react';

export type themeMode = 'light' | 'dark';

interface IDefaulfContext {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<themeMode>>;
}

export const ThemePreferenceContext = React.createContext<IDefaulfContext>({
  currentTheme: 'light',
  setCurrentTheme: () => 'light',
});
