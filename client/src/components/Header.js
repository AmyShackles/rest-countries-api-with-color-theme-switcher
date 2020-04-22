import React from "react";
import styled from "styled-components";
import { DarkModeButton } from "./DarkModeButton.js";

const HeaderDiv = styled.header`
  width: 100%;
  & div#header {
    background-color: ${({ theme }) => theme.cards};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      font-size: 24px;
      text-align: center;
      margin-left: 84px;
    }
    @media (max-width: 1250px) {
      height: 62px;
      & h1 {
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
`;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderDiv role="banner">
      <div id="header">
        <h1>Where in the world?</h1>
        <DarkModeButton toggleTheme={toggleTheme} />
      </div>
    </HeaderDiv>
  );
};
export { Header };
