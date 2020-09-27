import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

import { Label, PasswordInputCamp, InputContainer } from './styles';

const PasswordInput = ({ password, handleChange, title, isConfirmation = false }) => {
	const [showPassword, setShowPassword] = useState(false);

	const confirmation = isConfirmation ? 'Confirmation' : '';

	return (
		<Label>
			{title ? title : 'Password'}
			<InputContainer>
				<FontAwesomeIcon icon={faLock} />
				<PasswordInputCamp
					name={`password${confirmation}`}
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={handleChange}
					required
				/>

				<label>
					{showPassword ? (
						<FontAwesomeIcon icon={faEyeSlash} title="Hide password" />
					) : (
						<FontAwesomeIcon icon={faEye} title="Show password" />
					)}
					<input id={'showPassword'} type="checkbox" onChange={(_) => setShowPassword(!showPassword)} />
				</label>
			</InputContainer>
		</Label>
	);
};

export default PasswordInput;
