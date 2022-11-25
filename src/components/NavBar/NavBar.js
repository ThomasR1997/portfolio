// Styled components
import {
  DiscordIcon,
  GitHubIcon,
  StyledNavBar,
  StyledLink,
} from "./StyledNavBar";

// Libraries
import MediaQuery from "react-responsive";

// Replaces burgermenu with navbar on desktops
const NavBar = () => {
  return (
    <MediaQuery minWidth={811}>
      <StyledNavBar>
        <div>
          <StyledLink to="home" spy={true} smooth={true} offset={-100}>
            Hjem
          </StyledLink>

          <StyledLink to="about" spy={true} smooth={true} offset={-200}>
            Om meg
          </StyledLink>

          <StyledLink to="skills" spy={true} smooth={true} offset={-200}>
            Ferdigheter
          </StyledLink>

          <StyledLink to="projects" spy={true} smooth={true} offset={-200}>
            Prosjekter
          </StyledLink>

          <StyledLink to="contact" spy={true} smooth={true} offset={-200}>
            Kontakt meg
          </StyledLink>
        </div>

        <div>
          <a
            href={"https://github.com/hftjutyir"}
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
