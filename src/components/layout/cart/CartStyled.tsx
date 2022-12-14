import styled from "styled-components";

export const CartStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  a {
    color: var(--brand-color);
  }
  input {
    margin-right: 8px;
  }
  .backDrop {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #00000061;
  }
  .cart {
    width: 460px;
    max-width: 80vw;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    .cartHead {
      background-color: #262626;
      display: flex;
      justify-content: space-between;
      color: white;
      padding: 8px 12px;
      font-size: 14px;
      button {
        width: 28px;
        background: none;
        border: none;
        position: relative;
        display: grid;
        place-items: center;
        &::before {
          content: "";
          position: absolute;
          width: 80%;
          height: 2px;
          background-color: var(--brand-color);
          transform: rotate(45deg);
        }
        &::after {
          content: "";
          position: absolute;
          width: 80%;
          height: 2px;
          background-color: var(--brand-color);
          transform: rotate(-45deg);
        }
        &:hover {
          outline: 2px solid rgba(255, 255, 255, 0.096);
        }
      }
    }
    .notification {
      border-bottom: 1px solid rgba(255, 255, 255, 0.253);
      padding: 12px 32px;
      color: white;
      display: flex;
      align-items: center;
      gap: 16px;
      p {
        width: 100%;
        font-size: 14px;
      }
      .graphic {
        background-color: var(--brand-color);
        height: 18px;
        width: 18px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        padding: 2px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .cartList {
      color: white;
      padding: 12px;
      overflow: scroll;
    }
    .total {
      color: white;
      padding: 12px;
      margin-top: auto;
      display: flex;
      flex-direction: column;
    }
    .tosAgreement {
      color: white;
      padding: 12px;
    }
    .checkoutBtn {
      color: white;
      background: none;
      border: 4px solid var(--brand-color);
      margin: 12px;
      padding: 20px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
    }
  }
`;
