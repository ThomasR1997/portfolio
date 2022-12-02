// Styled components
import { StyledH1, StyledH3, StyledSectionHome } from "./StyledSectionHome";

// Hooks
import { useTranslation } from "react-i18next";

const SectionHome = () => {
  const { t } = useTranslation();

  return (
    <StyledSectionHome name="home">
      <div>
        <StyledH1>Thomas Rustad</StyledH1>
        <StyledH3>{t("Section Home")}</StyledH3>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
