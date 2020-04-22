import React from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "./moon-outline.svg";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.cards};
  padding: 13px 80px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  top: 1px;
  right: 0;
  width: 266px;
  margin-right: 10px;
  @media (max-width: 1250px) {
    width: fit-content;
    height: 60px;
    padding: 0 5px;
    & p {
      margin: 0 5px;
    }
  }
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
