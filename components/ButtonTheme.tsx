import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemePreferenceContext } from '@/app/ThemePreferenceContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Toggler = styled.button`
  display: flex;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 5px;
    right: 50%;
    transform: translate(50%, 0%);
  }
`;

export const ButtonTheme = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);

  const toggleTheme = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  };

  const icon = currentTheme === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />;

  return (
    <div>
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
    </div>
  );
};
