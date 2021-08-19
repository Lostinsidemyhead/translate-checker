import React from "react";
import styled, { StyledComponent } from "styled-components";

interface ISpacerProps {
  height: string;
}

export const Spacer = styled.div<ISpacerProps>`
  height: ${props => props.height};
`;

export const ButtonWrapper = styled.div`
  padding-left: 7px;
`;

export const AppWrapper = styled.div`
  max-width: 484px;
  margin: auto;
`;

export const WordGround = styled.div`
  width: 70px;
  height: 30px;
  background: #E6E6E6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  z-index: 1;
`;