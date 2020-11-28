import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import User from '../UserDropdown';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Logo width="100px" hoverable />
      </Link>

      <User />
    </Container>
  );
};

export default Navbar;
