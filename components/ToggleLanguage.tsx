import React, { useState } from 'react';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';
import { NavButton } from './navbar/ButtonTheme';

export const ToggleLanguage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  return (
    <div>
      {language === 'es' ? (
        <NavButton onClick={() => setLanguage('en')}>
          <LanguageSwitcher lang="es">
            <img src="./spain.svg" />
          </LanguageSwitcher>
        </NavButton>
      ) : (
        <NavButton onClick={() => setLanguage('es')}>
          <LanguageSwitcher lang="en">
            <img src="./eeuu.svg" />
          </LanguageSwitcher>
        </NavButton>
      )}
    </div>
  );
};
