import React, { useState } from 'react';

import { FaLock } from 'react-icons/fa';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import { Label, PasswordInputCamp, InputContainer, PasswordVisibility } from './styles';

const PasswordInput = ({ password, handleChange, title, isConfirmation = false }) => {
	const [showPassword, setShowPassword] = useState(false);

	const confirmation = isConfirmation ? 'Confirmation' : '';

	return (
		<Label>
			{title ? title : 'Password'}
			<InputContainer>
				<FaLock />
				<PasswordInputCamp
					name={`password${confirmation}`}
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={handleChange}
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
