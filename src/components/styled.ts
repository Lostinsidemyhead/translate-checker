import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      margin: 0;
    }

    body {
      margin: 0;
      border: none;
      background: #e5e5e5;
    }
`;

interface SpacerProps {
  height: string;
}
export const Spacer = styled.div<SpacerProps>`
  height: ${props => props.height};
`;

export const ButtonWrapper = styled.div`
  padding-left: 7px;
`;

export const AppWrapper = styled.div`
  max-width: 484px;
  margin: auto;
  margin-top: 10%;
`;

export const WordGround = styled.div`
  width: 70px;
  height: 30px;
  background: #E6E6E6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
`;

export const WordDiv = styled.div`
  height: 28px;
  width: 68px;
  background: #FFFFFF;
  border: 1px solid #c9c9c9;
  border-radius: 13px;
  box-shadow: 0px 8px 4px -6px rgba(34, 60, 80, 0.25);
  font-family: Roboto-Regular;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
`;

export const UserField = styled.div`
  min-height: 76px;
  width: 470px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  padding: 7px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const Lines = styled.div`
  display: inline-flex;
  justify-content:center;
  align-items:center;
  
  &:after{
    content: "";
    width: 484px;
    margin-left: -484px;
    height: 1px;
    background: #4b4b4b;
  }
`;

export const OriginField = styled.div`
  min-height: 75px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  padding: 7px;
  &:nth-child(n){
    background: #E6E6E6;
    box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
  }
`;