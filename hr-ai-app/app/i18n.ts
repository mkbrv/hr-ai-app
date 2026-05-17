import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "~/locales/en.json";
import es from "~/locales/es.json";
import fr from "~/locales/fr.json";
import de from "~/locales/de.json";
import pt from "~/locales/pt.json";
import ne from "~/locales/ne.json";
import ro from "~/locales/ro.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "es", "fr", "de", "pt", "ne", "ro"],
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      pt: { translation: pt },
      ne: { translation: ne },
      ro: { translation: ro },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
