import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100vw;
  height: 80px;
`;

const ThemeToggle = styled.button`
  padding: 20px;
  color: ${({ theme }) => theme.cards};
`;

const Header = ({ toggleTheme }) => {
  return (
    <header role="banner">
      <HeaderDiv>
        <ThemeToggle onClick={toggleTheme}></ThemeToggle>
      </HeaderDiv>
    </header>
  );
};
export { Header };
