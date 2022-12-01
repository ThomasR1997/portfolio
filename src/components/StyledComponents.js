// Libraries
import styled from "styled-components";
import { Link } from "react-scroll";

// React Icons
import { FaDiscord } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

// Link
export const StyledLink = styled(Link)`
  color: ${(props) => (props.light ? "#fff" : "#64FFDA")};
  margin: 20px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

// Styles for icons
export const DiscordIcon = styled(FaDiscord)`
  color: white;
  height: 24px;
  width: 24px;
  cursor: pointer;
  margin: 5px;
`;

export const GitHubIcon = styled(AiOutlineGithub)`
  color: white;
  height: 24px;
  width: 24px;
  cursor: pointer;
  margin: 5px;
`;

export const SettingsIcon = styled(CiSettings)`
  color: white;
  height: 24px;
  width: 24px;
  cursor: pointer;
  transform: translate(10%, 15%);
`;

// Flex div for icons
export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
`;
