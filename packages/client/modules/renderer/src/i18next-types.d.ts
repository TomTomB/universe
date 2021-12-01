import 'react-i18next';
import type translations from '../public/locales/en/translation.json';

declare module 'react-i18next' {
  export interface Resources {
    translation: typeof translations;
  }
}
