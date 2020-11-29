import React, { useState } from 'react';

import { Label, Input } from './styles';

const TextualInput = ({
  block,
  name,
  type = 'text',
  thinLabel,
  label = '',
  invalidity,
  autocomplete = '',
  value,
  required,
  onChange,
  ...props
}) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (event) => {
    onChange(event);
  };

  const onBlur = () => {
    if (!touched) setTouched(true);
  };

  return (
    <Label block={block} thinLabel={thinLabel}>
      {label}
      <Input
        name={name}
        type={type}
        value={value}
        autocomplete={autocomplete}
        onChange={handleChange}
        onBlur={onBlur}
        required={required}
        {...props}
      />
    </Label>
  );
};

export default TextualInput;
