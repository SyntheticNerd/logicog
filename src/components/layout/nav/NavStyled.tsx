import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyled = styled(motion.nav)<{
  navOpen?: Boolean;
  peak?: Boolean;
  top?: Boolean;
}>`
  position: ${({ peak, navOpen, top }) =>
    peak || !top ? "fixed" : "absolute"};
  z-index: 5 !important;
  ${({ top }) =>
    !top &&
    `
      top: 0px;
    `}
  transition: all 0.5s;
  background-color: ${({ navOpen, peak }) =>
    navOpen
      ? "var(--nav-bg)"
      : peak
      ? "rgba(48, 48, 48, 0.9)"
      : "rgba(0, 0, 0, 0)"};
  width: 100%;
  height: max(64px, min(8vw, 98px));
  z-index: 8;

  .nav {
    width: 100%;
    max-width: 1280px;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: max(64px, min(8vw, 98px));
    margin: auto;
    margin-bottom: -84px;
    padding: 0px 16px;
    & > * {
      padding: 16px 0px;
    }
    svg {
      height: 100%;
      justify-self: center;
    }
    & > span {
      width: fit-content;
      place-self: center;
      height: 100%;
      svg {
        fill: white;
      }
    }
    .left {
      display: flex;
      justify-self: flex-start;
      height: 100%;
    }
    .right {
      height: 100%;
      display: flex;
      justify-self: flex-end;
      gap: 1vw;
    }
  }
`;

export const NavMenuStyled = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  background-color: #f4f4f4;
  z-index: 4;
  overflow-y: scroll;
  padding-bottom: 80px;
  @media (max-width: 1000px) {
    display: none;
  }
  .menuGrid {
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 120px 60px;
    margin-top: 180px;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      img {
        height: 85px;
        object-fit: contain;
      }
      p {
        color: var(--brand-color);
        font-weight: bold;
        font-size: 14px;
        margin-top: 32px;
      }
    }
  }
`;

export const MobileNavStyled = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 6;
  @media (min-width: 1000px) {
    display: none;
  }
  .backDrop {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
  }
  .contentWrapper {
    background-color: var(--brand-color);
    width: 80vw;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    .anotherWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-y: scroll;
    }
  }

  .expandableButton {
    background: none;
    border: none;
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid lightgray;
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
  .listWrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    align-items: flex-end;
    transition: all 1s;
    a {
      display: block;
      background-color: #f4f4f4;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: fit-content;
      position: relative;
      padding: 4px 40px;
      text-decoration: none;

      img {
        height: 48px;
      }
      p {
        color: black;
        font-weight: bold;
      }
    }
  }

  .closeBtn {
    position: absolute;
    right: 0px;
    top: 80px;
    background-color: var(--brand-color-dark);
    border: none;
    outline: none;
    height: 64px;
    width: 64px;
    transform: translateX(100%);
    display: grid;
    place-items: center;

    &::before {
      width: 40%;
      height: 5%;
      content: "";
      background-color: white;
      border-radius: 5px;
      position: absolute;
      transform: rotate(45deg);
    }
    &::after {
      width: 40%;
      height: 5%;
      content: "";
      background-color: white;
      border-radius: 5px;
      position: absolute;
      transform: rotate(-45deg);
    }
  }
  .icon-container {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px;
    font-weight: bold;
    font-size: 16px;
    background: none;
    border: none;
    border-bottom: 1px solid lightgray;
    justify-content: space-between;
    svg {
      height: 20px;
      fill: black;
    }
  }
  .logoutBtn {
    border-top: 1px solid lightgray;
    margin-top: auto;
  }
`;
