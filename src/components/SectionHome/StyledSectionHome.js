// Libraries
import styled from "styled-components";

// Images
import home from "../../images/home.jpg";

// Styling, position and parallax effect for home section
export const StyledSectionHome = styled.div`
  background-image: url(${home});
  background-position: center;
  min-height: 60em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  @media only screen and (max-width: 580px) {
    background-attachment: scroll;
  }
`;

// Styling for home section header
export const StyledH1 = styled.h1`
  margin: 0;
  color: white;
  font-weight: 800;
  font-size: 48px;
  text-shadow: 0 0 3px black;
`;

export const StyledH3 = styled.h3`
  color: white;
  font-size: 24px;
  text-shadow: 0 0 3px black;
`;

export const CVDiv = styled.div`
  background-color: #52b788;
  margin: 0 auto;
  width: fit-content;
  padding: 1em 2em;
  border-radius: 5px;

  &:hover {
    filter: brightness(120%);
  }
`;

export const CVText = styled.h3`
  color: white;
  font-size: 24px;
  text-shadow: 0 0 3px black;
  margin: 0;
`;

export const StyledA = styled.a`
  text-decoration: none;
`;
