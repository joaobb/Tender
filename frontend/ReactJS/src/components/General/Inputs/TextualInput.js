import React from 'react';

import { FaUser } from 'react-icons/fa';

import { Label, Input, InputContainer } from './styles';

const TextualInput = ({ value, name, onChange, label, required = false }) => {
	return (
		<Label>
			{label}
			<InputContainer>
				<FaUser />
				<Input name={name} value={value} onChange={onChange} required={required} />
			</InputContainer>
		</Label>
	);
};

export default TextualInput;
