import React from "react";
import styled from "styled-components";

const SlideStyled = styled.div`
  min-height: calc(100vh - 42px);
  background-image: url(${require("../../../../images/heroSlides/proracing-hpb-desktop.webp")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DriveToWinSlide = () => {
  return <SlideStyled>HolidaySlide</SlideStyled>;
};

export default DriveToWinSlide;
