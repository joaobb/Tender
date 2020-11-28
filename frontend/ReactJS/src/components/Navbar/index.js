import React from 'react';
import { Link } from 'react-router-dom';

import User from '../UserDropdown';
import { Container } from './styles';
import Logo from '../Logo';

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
