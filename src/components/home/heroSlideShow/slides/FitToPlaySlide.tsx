import React from "react";
import styled from "styled-components";

const SlideStyled = styled.div`
  min-height: calc(100vh - 42px);
  background-color: orange;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
  video {
    position: absolute;
    z-index: -1;
  }
`;

const FitToPlaySlide = () => {
  return (
    <SlideStyled>
      <video autoPlay={true} muted loop>
        <source
          src='https://resource.logitechg.com/w_1920,c_limit,f_auto,dpr_1.0,q_auto:best/content/dam/gaming/en/products/fits/hpb/revised-videos/r2/hpb-banner-desktop.mp4'
          type='video/mp4'
        />
      </video>
      HolidaySlide
    </SlideStyled>
  );
};

export default FitToPlaySlide;
