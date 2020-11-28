import React from 'react';

import { Container } from './styles';

const Recipe = ({ recipe }) => {
  return <Container>{recipe?.name}</Container>;
};

export default Recipe;
