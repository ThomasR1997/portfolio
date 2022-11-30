// Styled components
import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  ReactIcon,
  StyledSectionSkills,
} from "./StyledSectionSkills";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

export const SectionSkills = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledSectionSkills light={!darkMode ? true : false} name="skills">
      <HtmlIcon />
      <CssIcon />
      <JsIcon />
      <ReactIcon />
    </StyledSectionSkills>
  );
};
