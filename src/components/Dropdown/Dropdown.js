// Hooks
import { useContext, useState } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

// Styled components
import {
  StyledButton,
  StyledDropdown,
  StyledDropdownContent,
  StyledP,
} from "./StyledDropdown";

import { SettingsIcon } from "../StyledComponents";

// Libraries
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import MediaQuery from "react-responsive";

// Dropdown menu
export const Dropdown = () => {
  const { t } = useTranslation();
  const [display, setDisplay] = useState("none");
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  // click handler for dropdown menu
  const handleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  // Toggle between dark and light mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // click handler for changing languages
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledDropdown>
      <StyledButton onClick={() => handleClick()}>
        <SettingsIcon />
      </StyledButton>

      <StyledDropdownContent
        light={!darkMode ? true : false}
        style={{ display: display }}
      >
        <StyledP light={!darkMode ? true : false}>
          {t("Nav Settings Header")}
        </StyledP>

        <MediaQuery minWidth={811}>
          <StyledButton
            light={!darkMode ? true : false}
            onClick={() => handleToggle()}
          >
            {t("Nav Settings Dark Mode")}
          </StyledButton>
        </MediaQuery>

        <StyledP light={!darkMode ? true : false}>
          {t("Nav Settings Languages")}
        </StyledP>
        <StyledButton
          light={!darkMode ? true : false}
          onClick={() => changeLanguage("en")}
        >
          English
        </StyledButton>

        <StyledButton
          light={!darkMode ? true : false}
          onClick={() => changeLanguage("no")}
        >
          Norsk
        </StyledButton>
      </StyledDropdownContent>
    </StyledDropdown>
  );
};
