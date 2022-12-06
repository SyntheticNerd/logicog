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
  h1 {
    color: white;
    font-size: 46px;
    text-align: center;
    margin-bottom: 32px;
  }
  p {
    color: white;
    font-size: 20px;
    text-align: center;
    max-width: 400px;
    margin-bottom: 24px;
  }
  button {
    background: none;
    background-color: var(--brand-color);
    border: none;
    outline: none;
    padding: 18px;
    border-radius: 8px;
    font-weight: medium;
    font-size: 20px;
  }
`;

const CloudGamingSlide = () => {
  return (
    <SlideStyled>
      {" "}
      <video autoPlay={true} muted loop>
        <source
          src='https://resource.logitechg.com/w_1920,c_limit,f_auto,dpr_1.0,q_auto:best/content/dam/gaming/en/homepage/cloud-hpb-loop-0824.mp4'
          type='video/mp4'
        />
      </video>
      <h1>
        CLOUD <br /> GAMING HANDHELD
      </h1>
      <p>
        Put advanced graphics and a ridiculous amount of games in your hands.
      </p>
      <button>MEET CLOUD</button>
    </SlideStyled>
  );
};

export default CloudGamingSlide;
