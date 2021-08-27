import React, { FC } from 'react';
import { NotificationWrapper, Spacer } from './styled';

interface NotificationProps {
  isValid: boolean;
}

const Notification: FC<NotificationProps> = ({ ...props }) => {
  return (
    <NotificationWrapper {...props}>
      <Spacer height="57px;" />
      {props.isValid ? "You're right!" : 'Something wrong!'}
      <Spacer height="27px;" />
    </NotificationWrapper>
  );
};

export default Notification;
