// Hooks
import { useContext, useState } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";
import { useTranslation } from "react-i18next";

// Styled components
import {
  StyledButton,
  StyledDropdown,
  StyledDropdownContent,
  StyledInput,
  StyledLabel,
  StyledP,
  StyledSwitch,
} from "./StyledDropdown";

import { SettingsIcon } from "../StyledComponents";

// Libraries
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
  const handleChange = () => {
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
          <StyledLabel htmlFor="checkbox" light={!darkMode ? true : false}>
            <StyledInput
              type="checkbox"
              id="checkbox"
              onChange={handleChange}
            />
            <StyledSwitch />
            {t("Nav Settings Dark Mode")}
          </StyledLabel>
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
