// Libraries
import styled from "styled-components";

// Div for dropdown button
export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

// Position, size and color of the dropdown content
export const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #3a6ea5;
  min-width: 7em;
  padding: 2em;
`;

// Styles and hover effect for the dropdown buttons
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    text-decoration: underline;
  }
`;

// Styles for dropdown text
export const StyledP = styled.p`
  color: white;
  font-size: 13px;
  font-weight: bold;
`;
