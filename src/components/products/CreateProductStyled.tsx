import styled from "styled-components";
export const CreateProductStyled = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3%;
  form {
    width: 80%;
    max-width: 684px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    color: rgba(255, 255, 255, 0.5);
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
    color: white;
    font-weight: bold;
    margin-top: 20px;
  }
`;


