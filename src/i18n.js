// Libraries
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Nav Settings Header": "Settings:",
      "Nav Settings Dark Mode": "Dark mode",
      "Nav Settings Languages": "Languages:",

      "Nav Home": "Home",
      "Nav About me": "About me",
      "Nav Skills": "Skills",
      "Nav Projects": "Projects",
      "Nav Contact me": "Contact me",

      "Section Home": "Front-End Developer",

      "Section About Title": "About me",

      "Section About Text One":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper interdum proin purus ornare neque facilisis. Morbi sollicitudin senectus convallis tellus at dolor arcu mauris. Quis tincidunt eleifend mi, quis posuere ornare velit egestas ut. Sapien, id sollicitudin lobortis eget elit facilisis.",

      "Section About Text Two":
        "Pharetra pellentesque elit hac amet, porta nec etiam. Senectus sed nisl adipiscing egestas sed cursus sed quam. Bibendum facilisis ut arcu in felis, ac. Orci, quis eu id commodo lacus massa nunc. Sit cursus pellentesque felis eget sed. Quam nisi velit viverra facilisis sed ac pellentesque libero gravida.",

      "Section Skills Title": "Skills",

      "Section Projects Title": "Projects",

      "Footer Contact me": "Contact me",
      "Footer Text": "Designed and built by Thomas Kodehode",
    },
  },
  no: {
    translation: {
      "Nav Settings Header": "Instillinger:",
      "Nav Settings Dark Mode": "Mørk modus",
      "Nav Settings Languages": "Språk:",

      "Nav Home": "Hjem",
      "Nav About me": "Om meg",
      "Nav Skills": "Ferdigheter",
      "Nav Projects": "Prosjekter",
      "Nav Contact me": "Kontakt meg",

      "Section Home": "Front-End Utvikler",

      "Section About Title": "Om meg",

      "Section About Text One":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper interdum proin purus ornare neque facilisis. Morbi sollicitudin senectus convallis tellus at dolor arcu mauris. Quis tincidunt eleifend mi, quis posuere ornare velit egestas ut. Sapien, id sollicitudin lobortis eget elit facilisis.",

      "Section About Text Two":
        "Pharetra pellentesque elit hac amet, porta nec etiam. Senectus sed nisl adipiscing egestas sed cursus sed quam. Bibendum facilisis ut arcu in felis, ac. Orci, quis eu id commodo lacus massa nunc. Sit cursus pellentesque felis eget sed. Quam nisi velit viverra facilisis sed ac pellentesque libero gravida.",

      "Section Skills Title": "Ferdigheter",

      "Section Projects Title": "Prosjekter",

      "Footer Contact me": "Kontakt meg",
      "Footer Text": "Laget av Thomas Kodehode",
    },
  },
};

// passes i18n down to react-i18next
i18n.use(initReactI18next).init({
  fallbackLng: "no",
  resources,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
