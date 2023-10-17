import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en/translation.json";
import indonesian from "./id/translation.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    id: {
      translation: indonesian,
    },
  },

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: window.localStorage.getItem("lang") || "id",
});

export default i18next;
