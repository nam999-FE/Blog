import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../assets/languages/en/en.json";
import Vietnamese from "../assets/languages/vi/vi.json";

const resources = {
    eng: {
        translation: English,
    },
    vie: {
        translation: Vietnamese,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "eng",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
