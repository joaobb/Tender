import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import { Label, InputContainer, Input } from './styles';

const EmailInput = ({ email, handleChange }) => {
	return (
		<Label>
			Email
			<InputContainer>
				<FontAwesomeIcon icon={faAt} />
				<Input name="email" type="email" value={email} onChange={handleChange} required />
			</InputContainer>
		</Label>
	);
};

export default EmailInput;
