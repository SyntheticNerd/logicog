import styled from "styled-components";

export const CartBtnStyled = styled.button`
  background: none;
  border: none;
  position: relative;
  svg {
    stroke: rgba(255, 255, 255, 0.5);
    @media (max-width: 1004px) {
      height: 18px;
      width: 18px;
    }
  }
  &:hover {
    svg {
      stroke: white;
    }
  }
  span {
    position: absolute;
    height: 20px;
    width: 20px;
    right: -10px;
    top: -2px;
    background-color: var(--brand-color);
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: white;
    font-weight: bold;
  }
`;

export const NavBtnStyled = styled.button<{ navOpen?: Boolean }>`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: min(12%, 4px);
  align-items: center;
  justify-content: center;
  width: max(18px, min(23px, 2vw));
  position: relative;
  div {
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 6%;
    border-radius: 20%;
    transition: transform 0.3s;
  }
  .line1 {
    transform: ${({ navOpen }) => (navOpen ? "rotate(45deg)" : "rotate(0deg)")};
    position: ${({ navOpen }) => (navOpen ? "absolute" : "relative")};
  }
  .line2 {
    opacity: ${({ navOpen }) => (navOpen ? "0" : "1")};
    position: ${({ navOpen }) => (navOpen ? "absolute" : "relative")};
  }
  .line3 {
    transform: ${({ navOpen }) =>
      navOpen ? "rotate(-45deg)" : "rotate(0deg)"};
    position: ${({ navOpen }) => (navOpen ? "absolute" : "relative")};
  }
  &:hover {
    div {
      background-color: rgb(255, 255, 255);
    }
  }
`;

export const SearchBtnStyled = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-left: 20px;
  svg {
    fill: rgba(255, 255, 255, 0.5);
    width: 31px;
    @media (max-width: 1004px) {
      height: 18px;
      width: 18px;
    }
  }
  &:hover {
    svg {
      fill: white;
    }
  }
`;
