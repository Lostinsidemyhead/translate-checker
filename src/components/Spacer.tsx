import styled from "styled-components";

interface ISpacerProps {
  height: string;
}

export const Spacer = styled.div<ISpacerProps>`
  height: ${props => props.height};
`;