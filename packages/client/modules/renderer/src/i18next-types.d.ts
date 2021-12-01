import 'react-i18next';
import type translations from './core/modules/en/translation.json';

declare module 'react-i18next' {
  export interface Resources {
    translation: typeof translations;
  }
}
