import React, { useState } from 'react';
import { NavButton } from './navbar/ButtonTheme';
import { useTranslation } from 'react-i18next';

export const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {i18n.language === 'en' ? (
        <NavButton onClick={() => i18n.changeLanguage('es')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./eeuu.svg" alt="EEUU flag" />
        </NavButton>
      ) : (
        <NavButton onClick={() => i18n.changeLanguage('en')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./spain.svg" alt="Spain flag" />
        </NavButton>
      )}
    </>
  );
};
