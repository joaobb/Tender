import React, { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import Dropdown, { DropdownItem } from '../Dropdown';
import { Container, UserDataContainer, Name, Email } from './styles';
import { signOut } from '../../utils';
const USER_DATA = JSON.parse(localStorage.getItem('@Tender:user'));

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Container active={isOpen} onClick={handleToggle}>
      <FaUserAlt />
      <Dropdown isOpen={isOpen}>
        <UserData />
        <DropdownItem to="/cookbook" text="CookBook" />
        <DropdownItem onClick={signOut} text="Sign out" />
      </Dropdown>
    </Container>
  );
};

const UserData = () => (
  <UserDataContainer>
    <Name>{USER_DATA.username ?? 'Hello there'}</Name>
    <Email>{USER_DATA.email ?? 'How are you?'}</Email>
  </UserDataContainer>
);

export default User;
