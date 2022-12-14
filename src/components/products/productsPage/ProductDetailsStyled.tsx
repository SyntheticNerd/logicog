import styled from "styled-components";

export const ProductDetailsStyled = styled.div`
  padding: 100px 0px;
  .loadingWrapper {
    min-height: calc(100vh - 42px);
    display: flex;
    justify-content: center;
    margin-top: 10%;
  }
  .contentWrapper {
    max-width: 1280px;
    padding: 32px;
    margin: auto;
  }
  .currentRoute {
    display: flex;
    color: white;
    gap: 4px;
    font-size: 12px;
    width: 100%;

    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .mainContent {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
    .slideShow {
      width: 50%;
      margin: 32px 0px;
      height: 70vh;
      @media (max-width: 1100px) {
        width: 100%;
      }
      .slick-slider {
        height: 80%;
        .slick-list {
          height: 100%;
          .slick-track {
            height: 100%;
          }
        }
      }
      .slick-slide {
        border: none;
        outline: none;
        div {
          border: none;
          outline: none;
          height: 100%;
          img {
            object-fit: contain;
          }
        }
      }
      .slideWrapper {
        width: 100%;
        height: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        border: none;
        outline: none;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .slideNav {
        display: flex;
        justify-content: center;
        gap: 2%;
        width: 100%;
        margin: auto;
        margin-top: 32px;
        button {
          height: min(15vw, 74px);
          width: min(15vw, 74px);
          background: none;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .currentSlide {
          border: 2px solid var(--brand-color);
        }
      }
    }
    .productInfo {
      width: 35%;
      @media (max-width: 1100px) {
        width: 100%;
      }
      color: white;
      .series {
        background-color: white;
        color: black;
        padding: 4px 8px;
        font-size: 12px;
        margin-bottom: 16px;
        display: inline-block;
      }
      .title {
        color: white;
        font-size: 32px;
      }
      .price {
        margin-top: 16px;
        color: white;
        font-size: 18px;
      }
      .styles {
        display: flex;
        gap: 16px;
        margin-top: 50px;
        button {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: none;
          outline: none;
          transition: outline 0.05s;
        }
      }
      .inStock {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 16px;
      }
      .soldOut {
        text-align: center;
        margin: 40px 0px;
      }
      .description {
        font-size: 18px;
        letter-spacing: 0.5px;
        margin-top: 32px;
        margin-bottom: 40px;
      }
      .addToCart {
        width: 100%;
        padding: 12px 0px;
        margin-bottom: 40px;
        font-weight: bold;
        background-color: var(--brand-color);
        border: 4px solid var(--brand-color);
        outline: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        transition: all 0.3s;
        svg {
          stroke: black;
          height: 18px;
          width: 18px;
        }
        &:hover {
          background: none;
          color: var(--brand-color);
          svg {
            stroke: var(--brand-color);
          }
        }
      }
      .dropDown {
        background-color: #333333;
        border-radius: 4px;
        margin-bottom: 20px;
        .dropDownBtn {
          width: 100%;
          padding: 12px 12px;
          background: none;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 3px;
          text-align: left;
          position: relative;
          &::before {
            content: "";
            background-color: white;
            height: 4px;
            width: 18px;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 2px;
          }
          &::after {
            content: "";
            background-color: white;
            height: 4px;
            width: 18px;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%) rotate(90deg);
            border-radius: 2px;
          }
        }
        .open {
          &::after {
            opacity: 0;
          }
        }
        .dropDownContainer {
          padding: 0px 12px;
          overflow: hidden;
          max-height: 0px;
          transition: all 0.3s ease;
          h3 {
            font-size: 18px;
            margin-bottom: 20px;
          }
          h4 {
            margin-bottom: 16px;
          }
          ul {
            list-style-type: none;
            margin-bottom: 16px;
          }
          a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 0.7px;
            margin-bottom: 8px;
            display: inline-block;
            &::after {
              content: "►";
              margin-left: 12px;
              font-family: "Courier New", Courier, monospace;
            }
          }
        }
        .dropDownOpen {
          max-height: 1000px;
          opacity: 1;
          padding: 12px;
        }
      }
    }
  }
`;
