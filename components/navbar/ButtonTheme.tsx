import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemePreferenceContext } from '@/app/ThemePreferenceContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const NavButton = styled.button`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const Toggler = styled(NavButton)`
  color: ${(props) => props.theme.text};
`;

export const ButtonTheme = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);
  const icon = currentTheme === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />;
  const toggleTheme = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  };

  return <Toggler onClick={toggleTheme}>{icon}</Toggler>;
};
