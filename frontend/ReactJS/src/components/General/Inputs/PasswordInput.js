import React, { useState } from 'react';

import { FaLock } from 'react-icons/fa';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import { Label, PasswordInputCamp, InputContainer, PasswordVisibility } from './styles';

const PasswordInput = ({ label = 'Password', value, onChange, title, isConfirmation = false }) => {
	const [showPassword, setShowPassword] = useState(false);

	const confirmation = isConfirmation ? 'Confirmation' : '';

	return (
		<Label>
			{label}
			<InputContainer>
				<FaLock />
				<PasswordInputCamp
					name={`password${confirmation}`}
					type={showPassword ? 'text' : 'password'}
					value={value}
					onChange={onChange}
					required
				/>

				<PasswordVisibility>
					{showPassword ? <BsEyeSlashFill title="Hide password" /> : <BsEyeFill title="Show password" />}
					<input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
				</PasswordVisibility>
			</InputContainer>
		</Label>
	);
};

export default PasswordInput;
