import styled from "styled-components";

export const MyOrdersStyled = styled.div`
  .transactionSummary {
    margin-bottom: 20px;
    border: 2px solid lightgray;
    padding: 20px;
    h4 {
      margin-bottom: 16px;
    }
    ul {
      list-style-type: none;
      margin-bottom: 12px;
      margin-top: 8px;
      li {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
  img {
    height: 60px;
    width: 60px;
    object-fit: contain;
  }
  .transactionDate {
    margin-bottom: 8px;
  }
  .returnReq {
    display: block;
    width: 100%;
    padding: 14px 0px;
    margin-top: 16px;
    background-color: #333333;
    border: 2px solid #333333;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      color: #333333;
      background: none;
    }
  }
`;
