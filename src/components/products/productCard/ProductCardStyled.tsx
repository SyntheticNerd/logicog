import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardStyled = styled.div`
  width: 33.3%;
  height: fit-content;
  padding: 8px;
  .imageWrapper {
    padding-top: 100%;
    position: relative;
    background-color: rgba(47, 49, 50, 0.1);

    img {
      padding: 32px;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .styleSelection {
    display: flex;
    gap: 16px;
    button {
      border-radius: 50%;
      height: 20px;
      width: 20px;
      border: 2px solid black;
    }
  }
  .contentWrapper {
    display: flex;
    position: relative;
    padding-left: 2.4em;
    color: #2f3132;
    margin-top: 8px;
    strong {
      transform: rotateZ(-90deg) translateX(-100%);
      position: absolute;
      left: 0;
      top: 8px;
      transform-origin: 0% 0%;
      background-color: rgba(47, 49, 50, 0.1);
      padding: 4px 8px;
      font-size: 14px;
      letter-spacing: 1.5px;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      b {
        font-size: 20px;
      }
      > button {
        background: none;
        background-color: var(--brand-color);
        padding: 8px 16px;
        width: fit-content;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s;
        border: 3px solid var(--brand-color);
        svg {
          width: 1.5em;
          stroke: black;
        }
      }
      > button:hover {
        background-color: white;
        color: var(--brand-color);
        svg {
          stroke: var(--brand-color);
        }
      }
    }
  }
`;
