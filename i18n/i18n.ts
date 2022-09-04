// i18n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// locales es
import common_es from './es/common.json';
// locales en
import common_en from './en/common.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      common: common_es,
    },
    en: {
      common: common_en,
    },
  },
});
