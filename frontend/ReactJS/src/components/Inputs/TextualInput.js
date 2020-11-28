import React, { useState } from 'react';

import { Label, Input } from './styles';

const TextualInput = ({
  name,
  type = 'text',
  label = '',
  invalidity,
  autocomplete = '',
  value,
  onChange,
}) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (event) => {
    onChange(event);
  };

  const onBlur = () => {
    if (!touched) setTouched(true);
  };

  return (
    <Label>
      {label}
      <Input
        name={name}
        type={type}
        value={value}
        autocomplete={autocomplete}
        onChange={handleChange}
        onBlur={onBlur}
        required
      />
    </Label>
  );
};

export default TextualInput;
