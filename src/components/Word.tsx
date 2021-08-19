import { FC } from 'react';
import styled from 'styled-components';

interface IWordProps {
  onDragStart: React.DragEvent<HTMLDivElement>;
  onDragLeave: React.DragEvent<HTMLDivElement>;
  onDragOver: React.DragEvent<HTMLDivElement>;
  onDragEnd: React.DragEvent<HTMLDivElement>;
  onDrop: React.DragEvent<HTMLDivElement>;
}

const WordDiv = styled.div`
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
  z-index: 10;
`;

const Word: FC = ({ children, ...props }) => {
  return (
    <WordDiv draggable={true} {...props}>
      {children}
    </WordDiv>
  )
}

export default Word;
