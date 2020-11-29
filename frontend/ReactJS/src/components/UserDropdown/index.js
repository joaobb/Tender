import React, { useState, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import UserContext from '../../contexts/userContext';
import { signOut } from '../../utils';
import Dropdown, { DropdownItem } from '../Dropdown';

import { Container, UserDataContainer, Name, Email } from './styles';

const User = () => {
  const { userData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Container active={isOpen} onClick={handleToggle}>
      <FaUserAlt />
      <Dropdown isOpen={isOpen}>
        <UserData username={userData.username} email={userData.email} />
        <DropdownItem to="/cookbook" text="CookBook" />
        <DropdownItem onClick={signOut} text="Sign out" />
      </Dropdown>
    </Container>
  );
};

const UserData = ({ username, email }) => (
  <UserDataContainer>
    <Name>{username ?? 'Hello there'}</Name>
    <Email>{email ?? 'How are you?'}</Email>
  </UserDataContainer>
);

export default User;
