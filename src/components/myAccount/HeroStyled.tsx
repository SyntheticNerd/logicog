import styled from "styled-components";
import image from "../../images/banners/myaccount-logitechg.webp";

export const HeroStyled = styled.div`
  height: 55vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background: url(${image});
  background-size: cover;
  background-position: center;
  h1 {
    color: white;
    font-size: 4em;
  }
  & > .flex-container {
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
  .columnContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    button {
      background: none;
      border: none;
      font-weight: bold;
      color: lightgray;
      cursor: pointer;
    }
  }
  .editProfileLink {
    color: var(--brand-color);
    font-weight: bold;
    /* margin */
  }
`;
