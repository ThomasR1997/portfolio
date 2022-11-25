// Styled components
import { IconDiv, StyledLink } from "../NavBar/StyledNavBar";
import { GitHubIcon, DiscordIcon } from "../NavBar/StyledNavBar";

// Libraries
import { slide as Menu } from "react-burger-menu";
import MediaQuery from "react-responsive";

// React-burger-menu library
// The burgermenu replaces the navbar for small screens
export const BurgerMenu = () => {
  return (
    <MediaQuery maxWidth={811}>
      <Menu styles={styles}>
        <StyledLink to="home" spy={true} smooth={true} offset={-100}>
          Hjem
        </StyledLink>

        <StyledLink to="about" spy={true} smooth={true} offset={-100}>
          Om meg
        </StyledLink>

        <StyledLink to="skills" spy={true} smooth={true} offset={-100}>
          Ferdigheter
        </StyledLink>

        <StyledLink to="projects" spy={true} smooth={true} offset={-100}>
          Prosjekter
        </StyledLink>

        <StyledLink to="contact" spy={true} smooth={true} offset={-100}>
          Kontakt
        </StyledLink>

        <IconDiv>
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
        </IconDiv>
      </Menu>
    </MediaQuery>
  );
};

// css for burgermenu
const styles = {
  /* Position and sizing of burger button */
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },

  /* Color/shape of burger icon bars */
  bmBurgerBars: {
    background: "#3a6ea5",
  },

  /* Color/shape of burger icon bars on hover*/
  bmBurgerBarsHover: {
    background: "#a90000",
  },

  /* Position and sizing of clickable cross button */
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },

  /* Color/shape of close button cross */
  bmCross: {
    background: "white",
  },

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },

  /* General sidebar styles */
  bmMenu: {
    background: "#3a6ea5",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },

  /* Morph shape necessary with bubble or elastic */
  bmMorphShape: {
    fill: "#373a47",
  },

  /* Wrapper for item list */
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },

  /* Individual item */
  bmItem: {
    // display: "inline - block",

    color: "white",
    marginBottom: "10px",
    textAlign: "left",
    textDecoration: "none",
    transition: "color 0.2s",
    display: "flex",
  },

  /* Styling of overlay */
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
