import styled from "styled-components";

export const CartBtnStyled = styled.button`
  background: none;
  border: none;
  position: relative;
  svg {
    stroke: rgba(255, 255, 255, 0.5);
  }
  &:hover{
    svg{
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
