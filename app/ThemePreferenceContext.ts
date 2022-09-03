import React from 'react';
import { light, dark } from '@/components/theme/Themes';

interface IThemeMap {
  light?: {
    primary: string;
    background: string;
    nav: string;
    border: string;
    text: string;
  };

  dark?: {
    primary: string;
    background: string;
    nav: string;
    border: string;
    text: string;
  };
}

export const themesMap: IThemeMap = {
  light,
  dark,
};

export type ObjectKey = keyof typeof themesMap;

interface IDefaulfContext {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemePreferenceContext = React.createContext<IDefaulfContext>({
  currentTheme: 'dark',
  setCurrentTheme: () => null,
});
