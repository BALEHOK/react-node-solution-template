import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './ru.json';
import en from './en.json';

const resources = {
  en,
  ru,
};

export const i18n = i18next.use(initReactI18next).use(LanguageDetector);

i18n.init({
  resources,

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    bindI18n: 'loaded languageChanged',
    bindI18nStore: 'added',
    useSuspense: true,
  },
  detection: {
    order: ['localStorage', 'navigator'],
  },
});
