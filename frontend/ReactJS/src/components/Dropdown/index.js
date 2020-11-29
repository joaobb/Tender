import React from 'react';

import Backdrop from '../Backdrop';

import {
  Container,
  DropdownLinkContainer,
  DropdownItemContainer,
  DropdownButtonContainer,
} from './styles';

const Dropdown = ({ isOpen, onToggle, inline, left, children, shadowed }) => {
  return isOpen ? (
    <>
      <Container
        left={left}
        inline={inline}
        isOpen={isOpen}
        shadowed={shadowed}
      >
        {children}
      </Container>
      <Backdrop onClick={onToggle} />
    </>
  ) : null;
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
