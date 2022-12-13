import styled from "styled-components";

export const AccountWrapper = styled.div`
  padding: 80px 0px;
  max-width: 1220px;
  margin: auto;
  display: flex;
  gap: 32px;
`;

export const AccountOverviewStyled = styled.div<{ outletActive?: Boolean }>`
  width: ${({ outletActive }) => (outletActive ? "fit-content" : "100%")};
  display: flex;
  flex-direction: ${({ outletActive }) => (outletActive ? "column" : "row")};
  justify-content: ${({ outletActive }) =>
    outletActive ? "flex-start" : "space-between"};
  text-align: ${({ outletActive }) => (outletActive ? "left" : "center")};
  & > div {
    height: fit-content;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 32px;
  }
  p {
    max-width: 300px;
    margin: auto;
    margin-bottom: 16px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    a {
      font-weight: bold;
      color: black;
      text-decoration: none;
      span {
        font-family: "Courier New", Courier, monospace;
        color: var(--brand-color);
        margin-left: 8px;
      }
    }
  }
`;
