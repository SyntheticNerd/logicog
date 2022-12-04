import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyled = styled.nav`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  position: sticky;
  position: relative;
  z-index: 5;
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
    gap: 20px;
    margin-top: 100px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 85px;
        object-fit: contain;
      }
    }
  }
`;
