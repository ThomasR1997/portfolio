// Styled components
import {
  StyledDiv,
  StyledImg,
  StyledP,
  StyledSectionAbout,
} from "./StyledSectionAbout";

// Images
import me from "../../images/me.png";

// Libraries
import { useTranslation } from "react-i18next";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

const SectionAbout = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledSectionAbout light={!darkMode ? true : false} name="about">
      <StyledDiv left>
        <StyledImg src={me} alt="This is me" />
      </StyledDiv>

      <StyledDiv right>
        <StyledP light={!darkMode ? true : false}>
          {t("Section About Text One")}
        </StyledP>

        <StyledP light={!darkMode ? true : false}>
          {t("Section About Text Two")}
        </StyledP>
      </StyledDiv>
    </StyledSectionAbout>
  );
};

export default SectionAbout;
