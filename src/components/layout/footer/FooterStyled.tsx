import styled from "styled-components";

import checkmark from "../../../images/icons/checkmark.svg";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  .contentWrapper {
    width: 100%;
    max-width: 1280px;
    /* outline: 2px solid green; */
    padding: 60px 0px;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* outline: 2px solid green; */
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        a {
          color: rgba(0, 0, 0, 0.88);
          border-bottom: 1px solid rgba(0, 0, 0, 0);
          text-decoration: none;
          padding: 2px 0px;
          &:hover {
            border-bottom: 1px solid rgba(0, 0, 0, 0.88);
          }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 64px;
    }
    form {
      .mainInput {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        input {
          width: 70%;
          font-size: 16px;
          padding: 16px;
          border-radius: 4px;
          border: none;
          outline: none;
        }
        button {
          width: calc(30% + 8px);
          margin-left: -8px;
          padding: 16px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          background: none;
          background-color: var(--top-bar-color);
          color: white;
          border-radius: 4px;
        }
      }
      .checkBox {
        display: flex;
        align-items: flex-start;
        input {
          height: 32px;
          width: 32px;
          border: none;
          border: 4px solid grey;
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
            background-color: grey;
            background-image: url(${checkmark});
            background-size: 100%;
            background-position: center;
          }
        }
        label {
          color: rgba(0, 0, 0, 0.384);
          font-weight: bold;
          max-width: 380px;
          a {
            color: var(--brand-color);
          }
        }
      }
    }
    .socialLinks {
        width: 200px;
      ul {
        list-style-type: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 16px;
      }
      .twitter {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(12, 117, 187, 0.8);
          }
        }
      }
      .facebook {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(0, 66, 141, 0.8);
          }
        }
      }
      .youtube {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(216, 0, 0, 0.8);
          }
        }
      }
      .instagram {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(202, 60, 190, 0.8);
          }
        }
      }
    }
  }
`;
