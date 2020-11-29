import React, { useState, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import UserContext from '../../contexts/userContext';
import { signOut } from '../../utils';
import { ROLE } from '../../utils/roles';
import Dropdown, { DropdownItem } from '../Dropdown';

import { Container, UserDataContainer, Name, Small } from './styles';

const User = () => {
  const { userData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  console.log(ROLE[userData.role]);
  return (
    <>
      <Container active={isOpen} onClick={handleToggle}>
        <FaUserAlt />
      </Container>
      <Dropdown isOpen={isOpen} onToggle={handleToggle} shadowed>
        <UserData
          username={userData.username}
          email={userData.email}
          role={ROLE[userData.role]}
        />
        <DropdownItem to="/cookbook" text="CookBook" />
        <DropdownItem onClick={signOut} text="Sign out" />
      </Dropdown>
    </>
  );
};

const UserData = ({ username, email, role = '' }) => (
  <UserDataContainer>
    <Name>{username ?? 'Hello there'}</Name>
    <Small>{email ?? 'How are you?'}</Small>
    <Small>{role}</Small>
  </UserDataContainer>
);

export default User;
