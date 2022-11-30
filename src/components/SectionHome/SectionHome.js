// Styled components
import { useTranslation } from "react-i18next";
import { StyledH1, StyledH3, StyledSectionHome } from "./StyledSectionHome";

const SectionHome = () => {
  const { t } = useTranslation();

  return (
    <StyledSectionHome name="home">
      <div>
        <StyledH1>Thomas Kodehode</StyledH1>
        <StyledH3>{t("Section Home")}</StyledH3>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
