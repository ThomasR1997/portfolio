// Libraries
import styled from "styled-components";

// Icons
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

// Color and position of the skills section
export const StyledSectionSkills = styled.div`
  background-color: #ebebeb;
  background: ${(props) => (props.light ? "#ebebeb" : "#0A1930")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 720px) {
    flex-wrap: wrap;
  }
`;

// Styling for Icons
export const HtmlIcon = styled(AiFillHtml5)`
  height: 7.5em;
  width: 7.5em;
  color: #e44f26;
  padding: 0 2em;
`;

export const CssIcon = styled(DiCss3)`
  height: 7.5em;
  width: 7.5em;
  color: #1572b6;
  padding: 0 2em;
`;

export const JsIcon = styled(SiJavascript)`
  height: 5.9375em;
  width: 5.9375em;
  color: #f5de19;
  padding: 0.55em 2em;
  /* background-color: black; */
`;

export const ReactIcon = styled(DiReact)`
  height: 8.125em;
  width: 8.125em;
  color: #00d8ff;
  padding: 0.55em 2em;
`;
