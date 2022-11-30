// Libraries
import styled from "styled-components";

// Color, size and position of the sections header div
export const StyledSectionTitle = styled.div`
  background: ${(props) => (props.light ? "#EBEBEB" : "#0A1930")};
  height: 10.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styling for the different section headers
export const StyledTitle = styled.h1`
  color: ${(props) => (props.light ? "#3a6ea5" : "#64FFDA")};
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;
