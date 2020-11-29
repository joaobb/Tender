import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Label,
  PasswordInputCamp,
  PasswordVisibility,
  FormRow,
} from './styles';

const PasswordInput = ({
  label = 'Password',
  value,
  onChange,
  title,
  isConfirmation = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const confirmation = isConfirmation ? 'Confirmation' : '';

  return (
    <Label block>
      {label}

      <FormRow>
        <PasswordInputCamp
          autoComplete={isConfirmation ? 'new-password' : 'password'}
          name={`password${confirmation}`}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required
        />

        <PasswordVisibility>
          {showPassword ? (
            <BsEyeSlashFill title="Hide password" />
          ) : (
            <BsEyeFill title="Show password" />
          )}
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
        </PasswordVisibility>
      </FormRow>
    </Label>
  );
};

export default PasswordInput;
