import styled from "styled-components";

export const SmoothSliderStyled = styled.div`
  position: relative;
  max-width: 1280px;
  margin: auto;
  padding: 120px 0px;
  .slick-slider {
    height: 285px;
  }
  .slick-arrow {
    position: absolute !important;
    z-index: 4 !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: none !important;
    background-color: var(--brand-color) !important;
    border-radius: 4px;
    &:hover {
      opacity: 100%;
      background-color: var(--brand-color-dark)!important;
    }
  }
  .slick-prev {
    left: -8px;
    &::before {
      position: absolute;
      content: "";
      text-align: center;
      background-color: black;
      opacity: 100%;
      font-weight: bold;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px;
      width: 30%;
      transform: translate(-0%, 100%) rotate(40deg);
    }
    &::after {
      position: absolute;
      content: "";
      background-color: black;
      opacity: 100%;
      font-weight: bold;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px;
      width: 30%;
      transform: translate(-0%, -100%) rotate(-40deg);
    }
  }
  .slick-next {
    right: -8px;
    &::before {
      position: absolute;
      content: "";
      text-align: center;
      background-color: black;
      opacity: 100%;
      font-weight: bold;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px;
      width: 30%;
      transform: translate(0%, 100%) rotate(-40deg);
    }
    &::after {
      position: absolute;
      content: "";
      background-color: black;
      opacity: 100%;
      font-weight: bold;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px;
      width: 30%;
      transform: translate(0%, -100%) rotate(40deg);
    }
  }
  .slick-slide {
    height: 100%;
    & > div {
      height: 100%;
    }
  }
  .slick-list {
    height: 100%;
  }
  .slick-track {
    height: 100%;
    display: flex;
    gap: 20px;
  }
  .slider-link {
    height: 100%;
    /* width: 25%; */
    background-color: green;
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    overflow: hidden;
    h3 {
      color: white;
      text-decoration: none;
      position: absolute;
      top: 10%;
    }
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1;
    }
    span {
      color: black;
      font-weight: medium;
      text-decoration: none;
      position: absolute;
      bottom: 15%;
      background-color: var(--brand-color);
      padding: 8px;
      border-radius: 4px;
      transition: all 0.5s ease;
      transform: translateY(80px);
      opacity: 0;
    }
    &:hover {
      span {
        color: black;
        font-weight: medium;
        text-decoration: none;
        position: absolute;
        bottom: 15%;
        background-color: var(--brand-color);
        padding: 8px;
        border-radius: 4px;
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`;
