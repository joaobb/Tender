import React, { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';

import { Container } from './styles';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Container active={isOpen} onClick={handleToggle}>
      <FaUserAlt />
    </Container>
  );
};

export default User;
