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

import {
  StyledSectionTitle,
  StyledTitle,
} from "./components/SectionTitle/StyledSectionTitle";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <NavBar />

      <SectionHome />

      <StyledSectionTitle>
        <StyledTitle>Om meg</StyledTitle>
      </StyledSectionTitle>

      <SectionAbout />

      <StyledSectionTitle>
        <StyledTitle>Ferdigheter</StyledTitle>
      </StyledSectionTitle>

      <SectionSkills />

      <StyledSectionTitle>
        <StyledTitle>Prosjekter</StyledTitle>
      </StyledSectionTitle>

      <SimpleSlider />

      <StyledSectionTitle />

      <Footer />
    </div>
  );
}

export default App;
