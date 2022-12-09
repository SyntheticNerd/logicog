import styled from "styled-components";
import checkmark from "../../../images/icons/checkmark.svg";
import creditCardFront from "../../../images/creditCardFront.png";
import creditCardBack from "../../../images/creditCardBack.png";

export const CheckoutFormStyled = styled.div<{ expidShip?: Boolean }>`
  max-width: 770px;
  form {
    position: relative;
    h2:not(:first-child) {
      margin-top: 64px;
    }
    h2 {
      margin-bottom: 32px;
    }
    .inputWrapper {
      display: flex;
      flex-direction: column;
      label {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 8px;
        span {
          color: red;
        }
      }
      input {
        font-weight: bold;
        font-size: 14px;
        padding: 16px;
        border: none;
        outline: none;
        margin-bottom: 8px;
        border: 1px solid lightgrey;
        box-shadow: 0 0 0 2px white;
        &:focus {
          box-shadow: 0 0 0 2px white, 0 0 0 6px var(--brand-color);
        }
      }
    }
  }
  .flexContainer {
    display: flex;
    gap: 32px;
    margin-bottom: 20px;
  }
  .shortInput {
    width: 50%;
  }
  .longInput {
    margin-bottom: 20px;
  }
  select {
    padding: 16px;
    background: none;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0 3px white;
    font-weight: bold;
    font-size: 14px;
    &:focus {
      box-shadow: 0 0 0 3px white, 0 0 0 8px var(--brand-color);
    }
    option {
      font-weight: normal;
    }
  }
  .shippingMethod {
    div {
      margin-bottom: 16px;
    }
    input {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
    label {
      display: inline-block;
      padding: 20px;
      outline: 1px solid lightgrey;
      width: 100%;
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
      strong {
        margin-left: auto;
        height: 24px;
      }
      svg {
        display: none;
        height: 24px;
        width: 24px;
        margin-left: 8px;
      }
    }
    input[type="radio"]:checked + label {
      outline: 2px solid black;
      svg {
        display: block;
      }
    }
  }
  button {
    margin-top: 64px;
    padding: 20px;
    width: calc(50% - 16px);
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    background-color: var(--dark-color-1);
  }
  & > p {
    margin-top: 32px;
  }
  .editBtn {
    width: fit-content;
    margin: 0px 0px 0px auto;
    padding: 8px;
    border-radius: 4px;
    background: none;
    text-decoration: underline;
    color: grey;
    cursor: pointer;
  }
  .shippingTitle {
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 12px 0px;
    h2 {
      margin: 0px !important;
      color: var(--header-color-dark);
    }
    .completeStatus {
      background-color: #169e16;
      display: grid;
      place-items: center;
      padding: 4px;
      border-radius: 50%;
      margin-right: 32px;
      svg {
        height: 16px;
        width: 16px;
      }
    }
  }
  .shippingOverview {
    padding: 20px 0px 40px;
    border-bottom: 1px solid lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr;
    h3 {
      margin-bottom: 20px;
      color: var(--header-color-dark);
    }
    .check2 {
      border: 2px solid gray;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      svg {
        height: 80%;
        width: 80%;
      }
    }
    .stdShipCheck {
      background-color: ${({ expidShip }) => (!expidShip ? "#169e16" : "none")};
    }
    .expShipCheck {
      background-color: ${({ expidShip }) => (expidShip ? "#169e16" : "none")};
    }
  }
  .shippingMethodSummary {
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      margin-bottom: 16px;
      gap: 8px;
    }
  }
  .billingAddress {
    h3 {
      margin-top: 16px;
      color: var(--header-color-dark);
    }
    .billingOverview {
      h3 {
        font-size: 16px;
        color: black;
        margin-bottom: 12px;
      }
    }
    .sameShippingCheck {
      display: flex;
      align-items: center;
      margin-top: 16px;
      label {
        font-weight: bold;
      }
      input {
        height: 16px;
        width: 16px;
        border: none;
        border: 2px solid black;
        appearance: none;
        border-radius: 4px;
        margin-right: 16px;
        position: relative;
      }
      input:checked {
        :before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: black;
          background-image: url(${checkmark});
          background-size: 100%;
          background-position: center;
        }
      }
    }
  }
  .billingForm {
    margin-top: 32px;
  }
  .paymentMethod {
    margin-top: 32px;

    .cardContainer {
      margin: 32px 0px;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(45vw * 0.52);

      .creditCardFront {
        padding: 32px;
        position: absolute;
        width: calc(45vw * 0.64);
        height: calc(45vw * 0.41);
        min-width: 380px;
        min-height: 243px;
        z-index: 1;
        border-radius: 20px;
        background-image: url(${creditCardFront});
        background-size: 100%;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
      }
      .creditCardBack {
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 380px;
        height: 243px;
        position: absolute;
        width: calc(45vw * 0.64);
        height: calc(45vw * 0.41);
        min-width: 380px;
        min-height: 243px;
        transform: translate(20%, 10%);
        background-image: url(${creditCardBack});
        background-size: 100%;
        border-radius: 20px;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
      }
      .cardNumber {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10%;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        padding: 12px 0px;
        input {
          width: 3em;
          padding: 8px;
          font-size: 32px;
          font-weight: bold;
          color: white;
          background: none;
          border: none;
          outline: none;
          border-radius: 8px;
          box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.815),
            inset -1px -1px 6px #ffffff3d;
        }
      }
      h4 {
        margin: 8px 0px;
        color: white;
        text-shadow: 1px 1px 2px #000000, -1px -1px 2px #ffffff81;
        letter-spacing: 2px;
        padding: 4px;
      }
      .bottomRow {
        display: flex;
        width: 100%;
        gap: 16px;
        .cardNameInput {
          /* width: 60%; */
        }
        .cardExpirationInput {
          width: 9em;
        }
      }
      .inputWrapper {
        padding: 8px 0px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        input {
          width: 100%;
          padding: 8px;
          font-size: 32px;
          font-weight: bold;
          color: white;
          background: none;
          border: none;
          outline: none;
          border-radius: 8px;
          box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.815),
            inset -1px -1px 6px #ffffff3d;
        }
      }
      .cvvInput {
        margin-left: auto;
        width: 4em;
        margin-top: 30%;
        h4{
          color: lightgray;
          text-shadow: none;
        }
      }
    }
  }
`;
