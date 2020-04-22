import React from "react";
import styled from "styled-components";
import { ReactComponent as Back } from "./arrow-back-outline.svg";

const StyledButton = styled.button`
  margin-top: 80px;
  margin-left: 10px;
  height: 40px;
  width: 136px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.cards};
  box-shadow: ${({ theme }) => `1px 1px 7px -1px  ${theme.inputField}`};
  color: ${({ theme }) => theme.text};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`;
const BackButton = ({ goBack }) => {
  return (
    <StyledButton onClick={goBack}>
      <>
        <Back title="Back" />
        <span>Back</span>
      </>
    </StyledButton>
  );
};

export { BackButton };
