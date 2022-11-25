// Styled components
import { DiscordIcon, GitHubIcon } from "../NavBar/StyledNavBar";
import { MailIcon, StyledFooter, StyledP } from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter name="contact">
      <div>
        <StyledP>Kontakt meg</StyledP>
      </div>

      <div>
        <a href="mailto: thomas.kodehode@gmail.com">
          <MailIcon />
        </a>
      </div>

      <div>
        <StyledP>Laget av Thomas Kodehode</StyledP>
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
    </StyledFooter>
  );
};
