import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  position: sticky;
  position: relative;
  z-index: 1;
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
