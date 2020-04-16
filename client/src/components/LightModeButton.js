import React from "react";
import styled from "styled-components";
import { ReactComponent as Sun } from "./sunny-outline.svg";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.toggleButton};
  padding: 13px 90px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 600;
  position: absolute;
  top: 1px;
  right: 24px;
  width: 266px;
`;
const LightModeButton = ({ toggleTheme }) => {
  return (
    <StyledButton onClick={toggleTheme}>
      <Sun title="Enable light mode" />
      <p>Dark Mode</p>
    </StyledButton>
  );
};

export { LightModeButton };
