import React from 'react';

import TextBallons from '../TextBalloons';

import { Container } from './styles';

const Ingredients = ({ data }) => {
  return (
    <Container>
      <TextBallons
        numbered
        title="Ingredients"
        messages={data}
        type="ingredients"
      />
    </Container>
  );
};

export default Ingredients;
