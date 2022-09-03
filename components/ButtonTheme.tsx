import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemePreferenceContext } from '@/app/ThemePreferenceContext';

interface IPropsStyle {
  inverse?: boolean;
}

export const ButtonTheme = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);
  const isDarkTheme = currentTheme === 'dark';
  const toggleTheme = () => setCurrentTheme(isDarkTheme ? 'light' : 'dark');

  // const Text = styled.p<IPropsStyle>(
  //   ({ inverse }) => `
  //     background-color: ${inverse ? 'white' : 'blue'};
  //     color: ${inverse ? 'blue' : 'white'};
  //     font-size: 40px;
  //   `
  // );

  const Text = styled.p(
    ({ theme }) => `
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background};
      transition: background-color .4s ease-in-out;
    `
  );

  return (
    <div>
      <Text>Hello world!</Text>
      <button onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </button>
    </div>
  );
};
