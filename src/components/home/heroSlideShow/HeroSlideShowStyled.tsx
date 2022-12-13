import styled from "styled-components";

export const HeroSlideShowStyled = styled.div`
  min-height: calc(100vh - 42px);
  max-width: 100vw;

  .scrollableArea {
    position: absolute;
    display: flex;
    overflow-x: scroll;
    position: relative;
    z-index: 0;
    scroll-behavior: smooth;
  }
  .slide {
    min-width: 100vw;
    flex-grow: 1;
  }
  .sides {
    transition: transform 0.8s cubic-bezier(0.76, 0.22, 0.28, 0.6);
    z-index: 1;
  }
  .peakRight {
    transform: translateX(-300px);
  }
  .peakLeft {
    transform: translateX(300px);
  }
  .center {
    z-index: -1;
  }

  .left {
    position: absolute;
    top: 50%;
    left: 32px;
    padding: 20px;
    transform: translateY(-50%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 32px;
    & > div {
      height: 80%;
      width: 80%;

      position: absolute;
      svg {
        fill: rgba(255, 255, 255, 0.7);
        height: 100%;
        width: 100%;
      }
    }

    b {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  .right {
    position: absolute;
    top: 50%;
    right: 32px;
    padding: 20px;
    transform: translateY(-50%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 32px;
    
    & > div {
      height: 80%;
      width: 80%;

      position: absolute;
      svg {
        fill: rgba(255, 255, 255, 0.7);
        height: 100%;
        width: 100%;
      }
    }

    b {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;
