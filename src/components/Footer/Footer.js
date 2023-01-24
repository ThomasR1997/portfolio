// Styled components
import { DiscordIcon, GitHubIcon } from "../StyledComponents";
import { MailIcon, StyledFooter, StyledP } from "./StyledFooter";

// Hooks
import { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledFooter light={!darkMode ? 1 : 0} name="contact">
      <div>
        <StyledP light={!darkMode ? 1 : 0}>{t("Nav Contact me")}</StyledP>
      </div>

      <div>
        <a href="mailto: thomas.kodehode@gmail.com">
          <MailIcon />
        </a>
      </div>

      <div>
        <StyledP light={!darkMode ? 1 : 0}>{t("Footer Text")}</StyledP>
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
    </StyledFooter>
  );
};
