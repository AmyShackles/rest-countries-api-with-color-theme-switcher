import React from "react";
import styled from "styled-components";
import { DarkModeButton } from "./DarkModeButton.js";
import { LightModeButton } from "./LightModeButton.js";

const HeaderDiv = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.cards};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  box-shadow: ${({ themeString }) =>
    themeString === "light" ? `0px 3px 200px 45px #ededed;` : `none`};
  border-bottom: ${({ themeString }) =>
    themeString === "light" ? `4px solid #ededed;` : `1px solid #2b2b2b`};
  & h1 {
    font-size: 24px;
    text-align: center;
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <header role="banner">
      <HeaderDiv themeString={theme}>
        <h1>Where in the world?</h1>
        {theme === "light" ? (
          <DarkModeButton toggleTheme={toggleTheme} />
        ) : (
          <LightModeButton toggleTheme={toggleTheme} />
        )}
      </HeaderDiv>
    </header>
  );
};
export { Header };
