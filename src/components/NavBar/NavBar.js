// Styled components
import { DiscordIcon, GitHubIcon, StyledLink } from "../StyledComponents";
import { StyledNavBar } from "./StyledNavBar";

// Libraries
import MediaQuery from "react-responsive";
import { Dropdown } from "../Dropdown/Dropdown";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";
import { useTranslation } from "react-i18next";

// Replaces burgermenu with navbar on desktops
const NavBar = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <MediaQuery minWidth={811}>
      <StyledNavBar light={!darkMode ? 1 : 0}>
        <div>
          <Dropdown />
        </div>

        <div>
          <StyledLink
            light={!darkMode ? 1 : 0}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
          >
            {t("Nav Home")}
          </StyledLink>

          <StyledLink
            light={!darkMode ? 1 : 0}
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
          >
            {t("Nav About me")}
          </StyledLink>

          <StyledLink
            light={!darkMode ? 1 : 0}
            to="skills"
            spy={true}
            smooth={true}
            offset={-200}
          >
            {t("Nav Skills")}
          </StyledLink>

          <StyledLink
            light={!darkMode ? 1 : 0}
            to="projects"
            spy={true}
            smooth={true}
            offset={-200}
          >
            {t("Nav Projects")}
          </StyledLink>

          <StyledLink
            light={!darkMode ? 1 : 0}
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
          >
            {t("Nav Contact me")}
          </StyledLink>
        </div>

        <div>
          <a
            href={"https://github.com/ThomasR1997"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <GitHubIcon />
          </a>
          <a
            href={"https://discordapp.com/users/1004669422696402974"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <DiscordIcon />
          </a>
        </div>
      </StyledNavBar>
    </MediaQuery>
  );
};

export default NavBar;
