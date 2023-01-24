// Css
import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import { SectionSkills } from "./components/SectionSkills/SectionSkills";
import { SimpleSlider } from "./components/SectionProjects/SectionProjects";
import { Footer } from "./components/Footer/Footer";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";

// Styled components
import {
  StyledSectionTitle,
  StyledTitle,
} from "./components/SectionTitle/StyledSectionTitle";

// Hooks
import { useState } from "react";
import { DarkModeContext } from "./contextState/DarkModeContext";
import { useTranslation } from "react-i18next";

function App() {
  // Enables translation
  const { t } = useTranslation();
  // For dark and light mode
  const [darkMode, setDarkMode] = useState(0);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App">
        <BurgerMenu />
        <NavBar />

        <SectionHome />

        <StyledSectionTitle light={!darkMode ? 1 : 0}>
          <StyledTitle light={!darkMode ? 1 : 0}>
            {t("Section About Title")}
          </StyledTitle>
        </StyledSectionTitle>

        <SectionAbout />

        <StyledSectionTitle light={!darkMode ? 1 : 0}>
          <StyledTitle light={!darkMode ? 1 : 0}>
            {t("Section Skills Title")}
          </StyledTitle>
        </StyledSectionTitle>

        <SectionSkills />

        <StyledSectionTitle light={!darkMode ? 1 : 0}>
          <StyledTitle light={!darkMode ? 1 : 0}>
            {t("Section Projects Title")}
          </StyledTitle>
        </StyledSectionTitle>

        <SimpleSlider />

        <StyledSectionTitle light={!darkMode ? 1 : 0} />

        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
