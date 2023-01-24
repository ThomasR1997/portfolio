// Styled components
import {
  StyledDiv,
  StyledImg,
  StyledP,
  StyledSectionAbout,
} from "./StyledSectionAbout";

// Images
import me from "../../images/me.JPG";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";
import { useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledSectionAbout light={!darkMode ? 1 : 0} name="about">
      <StyledDiv left>
        <StyledImg src={me} alt="This is me" />
      </StyledDiv>

      <StyledDiv right>
        <StyledP light={!darkMode ? 1 : 0}>
          {t("Section About Text One")}
        </StyledP>

        <StyledP light={!darkMode ? 1 : 0}>
          {t("Section About Text Two")}
        </StyledP>
      </StyledDiv>
    </StyledSectionAbout>
  );
};

export default SectionAbout;
