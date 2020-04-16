import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: font-family: 'Nunito Sans', sans-serif;
    transition: all 0.25s linear;
  }
  input {
    background-color: ${({ theme }) => theme.inputField};
  }
  main {
    margin: 20px 35px;
  }
  .card {
    background-color: ${({ theme }) => theme.cards};
  }
  .home {
    font-size: 14px;
  }
  .details {
    font-size: 16px;
  }
  header button {
    background-color: ${({ theme }) => theme.toggleButton};
  }
`;
