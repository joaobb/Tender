import React from 'react';

import TextBallons from '../TextBalloons';

const Directions = ({ data }) => {
  return (
    <TextBallons
      numbered
      title="Directions"
      messages={data}
      type="directions"
    />
  );
};

export default Directions;
