// Styled components
import {
  StyledA,
  StyledH1,
  StyledH3,
  StyledSectionHome,
} from "./StyledSectionHome";

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
        <StyledA href={CV} download>
          <StyledH3>{t("Section Home CV")}</StyledH3>
        </StyledA>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
