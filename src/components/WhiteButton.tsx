import React, { FC } from 'react'

interface WhiteButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const WhiteButton: FC<WhiteButtonProps> = ({ children, ...props}) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default WhiteButton;


