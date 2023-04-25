// Styled components
import {
  CVDiv,
  CVText,
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
          <CVDiv>
            <CVText>{t("Section Home CV")}</CVText>
          </CVDiv>
        </StyledA>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
