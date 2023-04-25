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
        "Hello, my name is Thomas and I am 26 years old. I am a front-end developer who attends the Kodehode course. I find coding interesting, I like creating websites and apps. I enjoy solving problems.",

      "Section About Text Two":
        "In my spare time I am a gamer who is very fond of RPGs and online FPS games. I have been told that I am precise and reliable.",

      "Section Skills Title": "Skills",

      "Section Projects Title": "Projects",

      "Footer Contact me": "Contact me",
      "Footer Text": "Designed and built by Thomas Rustad",
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
        "Hei, mitt navn er Thomas og jeg er 26 år. Jeg er en front-end utvikler som deltar på kurs Kodehode. Koding syns jeg er interessant, jeg liker å lage nettsider og apper. Det å løse problemer syns jeg også er kjekt.",

      "Section About Text Two":
        "På fritiden er jeg en gamer som er veldig glad i RPGs og online FPS spill. Jeg har fått høre at jeg er presis og pålitelig.",

      "Section Skills Title": "Ferdigheter",

      "Section Projects Title": "Prosjekter",

      "Footer Contact me": "Kontakt meg",
      "Footer Text": "Laget av Thomas Rustad",
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
