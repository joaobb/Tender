import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';

import { TextualInput } from '../../../../components/Inputs';
import nationalities from '../../../../utils/nationalities';

import { Container, Toggler, FiltersContainer, ResetButton } from './styles';

const Filter = ({ name, origin, block, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => setIsOpen(!isOpen);

  const handleChange = (event) => {
    const { name: inpName, value } = event.target;

    onChange(inpName, value);
  };

  const handleReset = () => {
    onChange('reset');
  };

  return (
    <Container block={block}>
      <Toggler isOpen={isOpen} onClick={handleToggleIsOpen}>
        Filters <BiRightArrow />
      </Toggler>

      <Filters
        isOpen={isOpen}
        name={name}
        origin={origin}
        onChange={handleChange}
        onReset={handleReset}
      />
    </Container>
  );
};

const Filters = ({ isOpen, name = '', origin = '', onChange, onReset }) => (
  <FiltersContainer isOpen={isOpen}>
    <TextualInput
      name="name"
      label="Name"
      thinLabel
      value={name}
      onChange={onChange}
    />
    <OriginFilter
      name="origin"
      label="Origin"
      value={origin}
      onChange={onChange}
    />

    <ResetButton onClick={onReset}>Reset</ResetButton>
  </FiltersContainer>
);

const OriginFilter = ({ value, onChange }) => (
  <>
    <TextualInput
      thinLabel
      label="Cuisine"
      value={value}
      onChange={onChange}
      list="nationalities"
    />
    <datalist id="nationalities">
      {Object.values(nationalities).map((cuisine) => (
        <option key={cuisine.code} value={cuisine.nationality}>
          {cuisine.code}
        </option>
      ))}
    </datalist>
  </>
);

export default Filter;
