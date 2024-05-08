import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { i18nextPlugin } from 'translation-check'

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
  .use(i18nextPlugin)
	.init({
		fallbackLng: 'en',
		debug: true,
    supportedLngs: ['ar', 'fr', 'en'],
	})

export default i18n
