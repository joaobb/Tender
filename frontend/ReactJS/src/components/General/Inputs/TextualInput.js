import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Label, Input, InputContainer } from './styles';

const TextualInput = ({ value, name, onChange, label, required = false }) => {
	return (
		<Label>
			{label}
			<InputContainer>
				<FontAwesomeIcon icon={faUser} />
				<Input name={name} value={value} onChange={onChange} required={required} />
			</InputContainer>
		</Label>
	);
};

export default TextualInput;
