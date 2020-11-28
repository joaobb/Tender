import React from 'react';

import {
  Container,
  DropdownLinkContainer,
  DropdownItemContainer,
  DropdownButtonContainer,
} from './styles';

const Dropdown = ({ isOpen, children }) => {
  return isOpen ? <Container>{children}</Container> : null;
};

export const DropdownItem = ({ to, onClick, text, icon, ...props }) => {
  const isLink = Boolean(to);
  const isButton = Boolean(onClick);

  if (isLink)
    return (
      <DropdownLinkContainer isLink={isLink} to={to} {...props}>
        <span>{text}</span>
        {icon}
      </DropdownLinkContainer>
    );

  if (isButton)
    return (
      <DropdownButtonContainer onClick={onClick} {...props}>
        <span>{text}</span>
        {icon}
      </DropdownButtonContainer>
    );

  return (
    <DropdownItemContainer {...props}>
      <span>{text}</span>
      {icon}
    </DropdownItemContainer>
  );
};

export default Dropdown;
