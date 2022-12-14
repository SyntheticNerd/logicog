import styled from "styled-components";

export const TopBarStyled = styled.nav`
  background-color: var(--top-bar-color);
  z-index: 7;
  position: relative;
  @media (max-width: 1020px) {
    display: none;
  }
  * {
    color: white;
    font-size: 12px;
  }
  svg {
    fill: white;
  }
  a {
    opacity: 50%;
    text-decoration: none;
  }
  a:hover {
    opacity: 100%;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    margin: auto;
    > div {
      display: flex;
      padding: 8px;
      align-items: center;
      hr {
        height: 26px;
        margin: 0px 16px;
        opacity: 50%;
      }
    }
  }

  .icon-container {
    height: 26px;
    display: flex;
    align-items: center;
    opacity: 50%;
    background: none;
    border: none;
    :hover {
      opacity: 100%;
    }
    svg {
      height: 1rem;
      fill: white;
    }
  }
`;
