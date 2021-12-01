import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de/translation.json';
import en from './en/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    de: {
      translation: de,
    },
    en: {
      translation: en,
    },
  },
  debug: import.meta.env.DEV,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
