import styled from "styled-components";
export const CheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 0px;
  .banner {
    & > h1 {
      margin-bottom: 16px;
    }
    margin-bottom: 16px;
  }
  .contentWrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1220px;
    margin: auto;
    margin-top: 80px;
    text-align: left;
    width: 100%;
  }
`;

export const TopBar = styled.div`
  justify-content: center;
  display: flex;
  background-color: #f4f4f4;
  padding: 20px;
  svg {
    fill: black;
    height: 40px;
  }
`;
