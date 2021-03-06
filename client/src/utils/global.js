import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
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
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.cards};
    border: none;
  }
  main {
    width: 100%;
    margin: 20px 70px;
  }
  svg path {
    stroke: ${({ theme }) => theme.text}
  }
  svg line {
    stroke: ${({ theme }) => theme.text}
  }
  svg polyline {
    stroke: ${({ theme }) => theme.text}
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
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;
