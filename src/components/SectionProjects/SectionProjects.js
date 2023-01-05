// Hooks
import React, { useContext } from "react";
import { DarkModeContext } from "../../contextState/DarkModeContext";

// Images
import project1 from "./ProjectsImages/countdownToChristmas.png";
import project2 from "./ProjectsImages/fakeWebstore.png";
import project3 from "./ProjectsImages/albertWeskerQuotes.png";
import project4 from "./ProjectsImages/paulAllanCard.png";

// Styled components
import {
  LeftArrow,
  RightArrow,
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledSlider,
} from "./StyledSectionProject";

// Libraries
import MediaQuery from "react-responsive";

// React-slick carousel/slider library
// Button handlers and slides settings
export const SimpleSlider = () => {
  const { darkMode } = useContext(DarkModeContext);

  const PrevButton = ({ className, onClick, style }) => (
    <MediaQuery minWidth={500}>
      <LeftArrow
        light={!darkMode ? true : false}
        className={className}
        onClick={onClick}
        style={{ ...style }}
      />
    </MediaQuery>
  );

  const NextButton = ({ className, onClick, style }) => (
    <MediaQuery minWidth={500}>
      <RightArrow
        light={!darkMode ? true : false}
        className={className}
        onClick={onClick}
        style={{ ...style }}
      />
    </MediaQuery>
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
          <StyledH3>Countdown to Christmas</StyledH3>
          <a
            href="https://thomasr1997.github.io/christmas-countdown/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project1} alt="Countdown to Christmas project" />
          </a>
        </div>

        <div name="projects">
          <StyledH3>Fake webstore</StyledH3>
          <a
            href="https://thomasr1997.github.io/fake-webstore/#/men-clothing-page"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project2} alt="Fake webstore project" />
          </a>
        </div>

        <div name="projects">
          <StyledH3>Albert Wesker quotes</StyledH3>
          <a
            href="https://thomasr1997.github.io/Albert-Wesker/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project3} alt="Albert Wesker quotes project" />
          </a>
        </div>

        <div name="projects">
          <StyledH3>Paul Allan's card</StyledH3>
          <a
            href="https://thomasr1997.github.io/Paul-Allen-s-card/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledImg src={project4} alt="Paul Allan's card project" />
          </a>
        </div>
      </StyledSlider>
    </StyledDiv>
  );
};
