// Libraries
import styled from "styled-components";

// Color and position of about section
export const StyledSectionAbout = styled.div`
  background: ${(props) => (props.light ? "#EBEBEB" : "#0A1930")};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1170px) {
    flex-wrap: wrap;
  }
`;

// Padding for the image and about me text
export const StyledDiv = styled.div`
  padding-left: ${(prop) => (prop.left ? "11em" : prop.right ? "4em" : null)};
  padding-right: ${(prop) => (prop.right ? "11em" : prop.left ? "4em" : null)};
  width: fit-content;

  @media only screen and (max-width: 1170px) {
    padding: 1em 5em;
  }
`;

// Image styling
export const StyledImg = styled.img`
  height: auto;
  width: 50%;
  border-radius: 5px;
`;

// Paragraph color
export const StyledP = styled.p`
  color: ${(props) => (props.light ? "#000" : "#fff")};
  font-size: 1.25em;
  line-height: 1.5em;
`;
