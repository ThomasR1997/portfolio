// Styled components
import { StyledH1, StyledH3, StyledSectionHome } from "./StyledSectionHome";

import CV from "../../files/cv.pdf";

// Hooks
import { useTranslation } from "react-i18next";

const SectionHome = () => {
  const { t } = useTranslation();

  return (
    <StyledSectionHome name="home">
      <div>
        <StyledH1>Thomas Rustad</StyledH1>
        <StyledH3>{t("Section Home")}</StyledH3>
        <a href={CV} download>
          <StyledH3>{t("Section Home CV")}</StyledH3>
        </a>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
