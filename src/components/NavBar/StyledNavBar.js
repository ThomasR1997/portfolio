// Libraries
import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-scroll";

// Navbar div
export const StyledNavBar = styled.div`
  background-color: #3a6ea5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

// Icons
export const DiscordIcon = styled(FaDiscord)`
  color: white;
  height: 24px;
  width: 24px;
  cursor: pointer;
  margin: 5px;
`;

// Styles for icons
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
`;

// Flex div for icons
export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
`;

// Link
export const StyledLink = styled(Link)`
  color: white;
  margin: 20px;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;
