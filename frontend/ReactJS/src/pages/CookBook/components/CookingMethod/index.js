import React from 'react';

import Directions from '../Directions';
import Ingredients from '../Ingredients';

import { Container } from './styles';

const CookingMethod = ({ ingredients, method }) => (
  <Container>
    <Ingredients data={ingredients} />
    <Directions data={method} />
  </Container>
);

export default CookingMethod;
