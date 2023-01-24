// Libraries
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const StyledDiv = styled.div`
  background-color: ${(props) => (props.light ? "#EBEBEB" : "#0A1930")};
`;
// Styling and different sizes for the project carousel
export const StyledSlider = styled(Slider)`
  background: ${(props) => (props.light ? "#3a6ea5" : "#515659")};
  margin: 0 21.875em;
  padding-bottom: 3.75em;
  border-radius: 5px;

  @media only screen and (max-width: 1300px) {
    margin: 0 auto;
    width: 28em;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    width: 18.75em;
  }

  @media only screen and (max-width: 308px) {
    margin: 0 auto;
    width: 10em;
  }
`;

// Size and position of the project images
export const StyledImg = styled.img`
  margin: 0 auto;
  width: 37.5em;
  border-radius: 5px;

  @media only screen and (max-width: 1300px) {
    width: 22em;
  }

  @media only screen and (max-width: 600px) {
    width: 14em;
  }

  @media only screen and (max-width: 308px) {
    width: 7em;
  }
`;

// Styling for arrow icons for the carousel
export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  fill: ${(props) => (props.light ? "#3a6ea5" : "#515659")};
  height: 50px;
  width: 50px;
  margin-left: -50px;
`;

export const RightArrow = styled(BsFillArrowRightCircleFill)`
  fill: ${(props) => (props.light ? "#3a6ea5" : "#515659")};
  height: 50px;
  width: 50px;
  margin-right: -50px;
`;

// Styling for the carousel project header
export const StyledH3 = styled.h3`
  color: white;
`;
