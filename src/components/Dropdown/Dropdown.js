// Hooks
import { useState } from "react";

// Styled components
import {
  StyledButton,
  StyledDropdown,
  StyledDropdownContent,
  StyledP,
} from "./StyledDropdown";

import { SettingsIcon } from "../NavBar/StyledNavBar";

// Dropdown menu
export const Dropdown = () => {
  const [display, setDisplay] = useState("none");

  // click handler for dropdown menu
  const handleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <StyledDropdown>
      <StyledButton onClick={() => handleClick()}>
        <SettingsIcon />
      </StyledButton>

      <StyledDropdownContent style={{ display: display }}>
        <StyledP>Instillinger:</StyledP>
        <StyledButton>Mørk modus</StyledButton>

        <StyledP>Språk:</StyledP>
        <StyledButton>English</StyledButton>
        <StyledButton>Norsk</StyledButton>
      </StyledDropdownContent>
    </StyledDropdown>
  );
};
