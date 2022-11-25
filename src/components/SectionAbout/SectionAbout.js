// Styled components
import { StyledDiv, StyledImg, StyledSectionAbout } from "./StyledSectionAbout";

// Images
import me from "../../images/me.png";

const SectionAbout = () => {
  return (
    <StyledSectionAbout name="about">
      <StyledDiv left>
        <StyledImg src={me} alt="This is me" />
      </StyledDiv>

      <StyledDiv right>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
          interdum proin purus ornare neque facilisis. Morbi sollicitudin
          senectus convallis tellus at dolor arcu mauris. Quis tincidunt
          eleifend mi, quis posuere ornare velit egestas ut. Sapien, id
          sollicitudin lobortis eget elit facilisis.
        </p>

        <p>
          Pharetra pellentesque elit hac amet, porta nec etiam. Senectus sed
          nisl adipiscing egestas sed cursus sed quam. Bibendum facilisis ut
          arcu in felis, ac. Orci, quis eu id commodo lacus massa nunc. Sit
          cursus pellentesque felis eget sed. Quam nisi velit viverra facilisis
          sed ac pellentesque libero gravida.
        </p>
      </StyledDiv>
    </StyledSectionAbout>
  );
};

export default SectionAbout;
