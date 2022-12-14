import styled from "styled-components";

export const WishListStyled = styled.div`
  flex-grow: 1;
  .wishList {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;
    width: 100%;
    .wishItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      a {
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        b {
          width: 300px;
          color: black;
        }
      }
      img {
        height: 80px;
      }
      & > div {
        display: flex;
        gap: 16px;
        .add {
          padding: 16px 60px;
          background-color: var(--brand-color);
          border: 2px solid var(--brand-color);
          border-radius: 4px;
          outline: none;
          font-weight: bold;
          transition: all 0.3s;
          &:hover {
            background: none;
            color: var(--brand-color);
          }
        }
        .remove {
          background: none;
          border: none;
          font-weight: bold;
          text-decoration: underline;
          opacity: 60%;
          transition: opacity 0.3s;
          &:hover {
            opacity: 100%;
          }
        }
      }
    }
  }
`;
