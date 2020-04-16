import React from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "./moon-outline.svg";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.toggleButton};
  padding: 13px 80px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: absolute;
  top: 1px;
  right: 24px;
  width: 266px;
`;
const DarkModeButton = ({ toggleTheme }) => {
  return (
    <StyledButton onClick={toggleTheme}>
      <Moon title="Enable dark mode" />
      <p>Dark Mode</p>
    </StyledButton>
  );
};

export { DarkModeButton };
