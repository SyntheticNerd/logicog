import styled from "styled-components";

export const CartItemStyled = styled.div`
  display: flex;
  margin-bottom: 12px;
  img {
    height: 120px;
    width: 120px;
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0.1);
    margin-right: 12px;
  }
  .right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      display: flex;
      justify-content: space-between;
      button {
        background: none;
        border: none;
        opacity: 50%;
        &:hover {
          opacity: 100%;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const QuantityStyled = styled.div`
  display: flex;
  align-items: center;
  outline: 2px solid rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 4px;
  gap: 8px;

  button {
    height: 40px;
    width: 40px;
    background: none;
    color: white;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
    p {
      font-weight: bold;
      font-size: 16px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      p {
        scale: 1.2;
      }
    }
  }
  p {
    width: 40px;
    text-align: center;
  }
`;
