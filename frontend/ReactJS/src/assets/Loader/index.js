import React from 'react';

import { ReactComponent as Animation } from './loader.svg';
import { Container } from './styles';
// Taken from https://codepen.io/ainalem/pen/eYmGLyp
import './style.css';

const Loader = ({ fullScreen }) => {
  return (
    <Container fullScreen={fullScreen}>
      <Animation />;
    </Container>
  );
};

export default Loader;
