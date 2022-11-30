import styled from "styled-components";
import checkmark from "../../images/icons/checkmark.svg";

export const ControlBoardStyled = styled.div`
  .controlBarWrapper {
    background-color: #f4f4f4;
  }
  .bottom {
    display: flex;
    max-width: 1490px;
    margin: auto;
    padding: 32px 0px;
    gap: 32px;
    .productSection {
      display: flex;
      flex-grow: 1;
    }
  }
`;

export const FiltersStyled = styled.div`
  height: fit-content;
  background-image: linear-gradient(
    to right,
    #697172 15%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  div {
    background-image: linear-gradient(
      to right,
      #697172 15%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 5px 1px;
    background-repeat: repeat-x;
    padding: 16px 0px 24px;
    h3 {
      margin-bottom: 16px;
    }
    ul {
      list-style: none;
      li {
        font-size: 18px;
        display: flex;
        align-items: center;
        input {
          margin-right: 8px;
          border: 2px solid var(--brand-color);
          height: 1rem;
          width: 1rem;
          text-decoration: none;
          appearance: none;
          border-radius: 4px;
          position: relative;
        }
        input:checked {
          :before {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: var(--brand-color);
            background-image: url(${checkmark});
            background-size: 100%;
            background-position: center;
          }
        }
      }
    }
  }
`;

export const ControlBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1490px;
  padding: 28px 0px;
  z-index: 5;
`;

export const FilterBtnStyled = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  color: #697172;
  cursor: pointer;
  &::before {
    content: "";
    height: 12px;
    width: 4px;
    position: absolute;
    background-color: #697172;
    left: 0px;
  }
  &::after {
    content: "";
    height: 12px;
    width: 10px;
    position: absolute;
    background-color: #697172;
    left: 6px;
  }
`;

export const SortDropDownStyled = styled.div<{ dropDown?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 14px;
    color: #697172;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    svg {
      transition: 0.3s ease;
      transform: ${({ dropDown }) =>
        dropDown ? "rotate(180deg)" : "rotate(0deg)"};
    }
    &:hover {
      color: black;
    }
  }
  ul {
    list-style-type: none;
    position: absolute;
    background-color: #f4f4f4;
    color: black;
    font-weight: bold;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    width: 306px;

    li {
      border-top: 1px solid #6971723d;
      text-align: right;
      padding: 20px;
      cursor: pointer;
      &:hover {
        background-color: #697172;
        color: white;
      }
    }
  }
`;
