import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales';

// import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const languageDetector = new LanguageDetector();
languageDetector.init(null, {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'lang',
    keySeparator: '::',
    nsSeparator: ':'
  });

export default i18n;
