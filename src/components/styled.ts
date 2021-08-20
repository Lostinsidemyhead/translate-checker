import styled from "styled-components";

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

export const WordsField = styled.div`
  height: 90px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  padding: 7px;
`;