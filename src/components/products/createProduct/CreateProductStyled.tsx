import styled from "styled-components";
export const CreateProductStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 3%; */
  input {
    color: black !important;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2) !important;
  }
  a {
    svg {
      fill: white;
    }
  }
  form {
    width: 80%;
    max-width: 684px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    color: black;
    & > button {
      width: 100%;
      background: none;
      background-color: var(--brand-color);
      border: none;
      outline: none;
      padding: 1rem;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  a {
    color: black;
    font-weight: bold;
    margin-top: 20px;
  }
  .styleContainer {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 32px;
    border-radius: 10px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
      width: 100%;
      background: none;
      background-color: var(--brand-color);
      border: none;
      outline: none;
      padding: 8px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  .previewImg {
    height: 80px;
    width: 80px;
  }
  .imgDeleteBox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 8px;
    width: fit-content;
  }
  .imgSelections {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
