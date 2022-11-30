// Hooks
import React, { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

// Images
import project1 from "./ProjectsImages/albertWeskerQuotes.png";
import project2 from "./ProjectsImages/paulAllanCard.png";

// Styled components
import {
  LeftArrow,
  RightArrow,
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledSlider,
} from "./StyledSectionProject";

// React-slick carousel/slider library
// Button handlers and slides settings
export const SimpleSlider = () => {
  const { darkMode } = useContext(DarkModeContext);

  const PrevButton = ({ className, onClick, style }) => (
    <LeftArrow
      light={!darkMode ? true : false}
      className={className}
      onClick={onClick}
      style={{ ...style }}
    />
  );

  const NextButton = ({ className, onClick, style }) => (
    <RightArrow
      light={!darkMode ? true : false}
      className={className}
      onClick={onClick}
      style={{ ...style }}
    />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <StyledDiv light={!darkMode ? true : false}>
      <StyledSlider light={!darkMode ? true : false} {...settings}>
        <div name="projects">
          <StyledH3>Albert Wesker quotes</StyledH3>
          <a
            href="https://github.com/hftjutyir/Albert-Wesker"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project1} alt="Albert Wesker quotes project" />
          </a>
        </div>

        <div>
          <StyledH3>Paul Allan's card</StyledH3>
          <a
            href="https://github.com/hftjutyir/Paul-Allen-s-card"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project2} alt="Paul Allan's card project" />
          </a>
        </div>
      </StyledSlider>
    </StyledDiv>
  );
};
