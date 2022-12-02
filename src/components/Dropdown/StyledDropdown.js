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
  background: ${(props) => (props.light ? "#3a6ea5" : "#0A1930")};
  min-width: 5em;
  padding: 1em;
`;

// Styles and hover effect for the dropdown buttons
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.light ? "#fff" : "#64FFDA")};
  font-size: 13px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    text-decoration: underline;
  }
`;

// Styles for dropdown paragraph
export const StyledP = styled.p`
  color: ${(props) => (props.light ? "#fff" : "#64FFDA")};
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styles for toggle switch label
export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: ${(props) => (props.light ? "#fff" : "#64FFDA")};
`;

// Toggle switch
export const StyledSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const StyledInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${StyledSwitch} {
    background: green;

    &:before {
      transform: translate(15px, -50%);
    }
  }
`;
