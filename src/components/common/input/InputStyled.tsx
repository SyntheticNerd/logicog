import styled from "styled-components";

export const CollapsibleInput = styled.div<{ collapse?: boolean }>`
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-bottom: 8px;
    label {
      position: absolute;
      transition: transform 0.3s;
      transform-origin: 0% 0%;
      transform: ${({ collapse }) =>
        collapse ? "none" : "translateY(-120%) scale(0.8)"};
    }
    input {
      background: none;
      border: none;
      outline: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
      color: white;
      font-size: 20px;
      font-weight: medium;
      padding: 8px 0px;
      &:focus {
        border-bottom: 2px solid var(--brand-color);
      }
    }
    button {
      position: absolute;
      right: 0px;
      background: none;
      border: none;
      outline: none;
      svg {
        fill: rgba(255, 255, 255, 0.5);
        &:hover {
          fill: white;
        }
      }
    }
  }
  p {
    color: #f76464;
  }
`;
