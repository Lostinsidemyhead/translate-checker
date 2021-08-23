import { FC } from 'react';
import styled from 'styled-components';
import { Spacer } from './styled';

interface NotificationProps {
  isValid: boolean;
}

const NotificationWrapper = styled.div<NotificationProps>`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${props => props.isValid ? "#03C03C" : "#FF0000"};
  text-shadow:  ${props => props.isValid
    ? "-1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5)"
    : "-1px -2px 2px #FFFFFF, 1px 2px 2px rgba(13, 91, 55, 0.5)"};
`;

const Notification: FC<NotificationProps> = ({ ...props }) => {
  return (
    <NotificationWrapper {...props}>
      <Spacer height="57px;" />
      {props.isValid ? "You're right!" : "Something wrong!"}
      <Spacer height="27px;" />
    </NotificationWrapper>
  )
}

export default Notification;
