// Libraries
import styled from "styled-components";

// Navbar div
export const StyledNavBar = styled.div`
  background: ${(props) => (props.light ? "#3a6ea5" : "#0A1930")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  position: fixed;
  width: 100%;
  z-index: 99;
`;
