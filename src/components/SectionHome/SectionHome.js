// Styled components
import { StyledH1, StyledH3, StyledSectionHome } from "./StyledSectionHome";

const SectionHome = () => {
  return (
    <StyledSectionHome name="home">
      <div>
        <StyledH1>Thomas Kodehode</StyledH1>
        <StyledH3>Front-End Utvikler</StyledH3>
      </div>
    </StyledSectionHome>
  );
};

export default SectionHome;
