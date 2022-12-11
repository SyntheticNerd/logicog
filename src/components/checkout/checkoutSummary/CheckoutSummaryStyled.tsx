import styled from "styled-components";

export const CheckoutSummaryStyled = styled.div`
  width: 340px;
  .summary {
    outline: 1px solid lightgray;
    padding: 16px;
    margin-bottom: 20px;
  }
  .summaryTitle {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    a {
      color: grey;
      font-size: 14px;
    }
  }
  .itemList {
    padding-bottom: 32px;
    border-bottom: 1px solid lightgrey;
  }
  .totals {
    padding: 16px 0px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    div{
      display: flex;
      justify-content: space-between;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .banner {
    display: flex;
    padding: 16px 0px;
    outline: 1px solid lightgray;
    .bannerBox {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 16px;
      gap: 8px;
      strong {
        display: inline-block;
        font-size: 13px;
        line-height: 1.2;
      }
      p {
        font-size: 10px;
      }
      img {
        width: 30px;
      }
    }
    .lock {
      border-left: 1px solid lightgray;
      width: 50%;
    }
  }
`;

export const SummaryItemStyled = styled.li`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  .left {
    height: 78px;
    min-width: 78px;
    border-radius: 4px;
    border: 1px solid lightgray;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    p {
      position: absolute;
      background-color: white;
      border: 1px solid lightgray;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0;
      top: 0;
      transform: translate(50%, -30%);
    }
  }
  .right {
    margin-top: -6px;
    h3 {
      font-size: 16px;
      text-transform: uppercase;
    }
    p {
      font-size: 12px;
      color: grey;
    }
    .inStock {
      color: #39bd39;
    }
    .outOfStock {
      color: #bd3939;
    }
    .price {
      margin-top: 8px;
      display: inline-block;
    }
  }
`;
