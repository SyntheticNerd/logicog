import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyled = styled.nav<{ navOpen?: Boolean }>`
  position: absolute;
  transition: background-color 0.5s;
  background-color: ${({ navOpen }) =>
    navOpen ? "var(--nav-bg)" : "rgba(0, 0, 0, 0)"};
  width: 100%;
  height: 80px;
  z-index: 8;
  .nav {
    width: 100%;
    max-width: 1280px;
    height: 80px;
    color: white;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    margin-bottom: -84px;
    svg {
      height: 100%;
      justify-self: center;
    }
    .left {
      display: flex;
      justify-self: flex-start;
    }
    .right {
      display: flex;
      justify-self: flex-end;
      gap: 16px;
    }
  }
`;

export const NavMenuStyled = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;

  background-color: #f4f4f4;
  z-index: 4;
  place-items: center;
  .menuGrid {
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 120px 60px;
    margin-top: 140px;
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
