// Libraries
import styled from "styled-components";

// React icons
import { AiOutlineMail } from "react-icons/ai";

// Position, size and color of the footer
export const StyledFooter = styled.div`
  background-color: #3a6ea5;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Color of footer text
export const StyledP = styled.p`
  color: white;
`;

// Color and size of the Email icon
export const MailIcon = styled(AiOutlineMail)`
  color: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
