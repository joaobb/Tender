import React, { useState } from 'react';

import { Label, InputContainer, Input } from './styles';

const TextualInput = ({ name, type = 'text', label = '', icon, invalidity, value, onChange }) => {
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
			<InputContainer className={touched ? 'touched' : ''} title={invalidity}>
				{icon}
				<Input name={name} type={type} value={value} onChange={handleChange} onBlur={onBlur} required />
			</InputContainer>
		</Label>
	);
};

export default TextualInput;
