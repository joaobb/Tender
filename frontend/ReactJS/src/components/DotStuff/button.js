import React from 'react';

import { ButtonContainer } from './styles';

const DotButton = ({ title, isActive, icon, onClick, ...props }) => (
  <ButtonContainer
    type="button"
    isActive={isActive}
    title={title}
    onClick={onClick}
    {...props}
  >
    {icon}
  </ButtonContainer>
);

export default DotButton;
