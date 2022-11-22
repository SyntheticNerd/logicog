import styled from "styled-components";
import image from "../../images/keyboard.jpg";

export const HeroStyled = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  &::before {
    background: url(${image});
    background-size: 100%;
    background-position: center;
    content: "";
    position: absolute;
    top: -1%;
    left: -1%;
    height: 102%;
    width: 102%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    z-index: -1;
  }
  h1 {
    color: white;
    font-size: 4em;
  }
  > div {
    display: flex;
    gap: 32px;

    > button {
      border: none;
      background: none;
      outline: none;
      font-weight: bold;
      padding: 16px;
      border-radius: 4px;
      box-shadow: var(--button-shadow);
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-4px);
      }
    }

    > a {
      color: black;
      text-decoration: none;
      font-weight: bold;
      padding: 16px;
      border-radius: 4px;
      box-shadow: var(--button-shadow);
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-4px);
      }
    }

    .create {
      background-color: var(--brand-color);
    }

    .login {
      background-color: white;
    }
  }
`;
