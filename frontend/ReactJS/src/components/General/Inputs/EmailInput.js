import React, { useState } from 'react';

import { FaAt } from 'react-icons/fa';

import { Label, InputContainer, Input } from './styles';

const EmailInput = ({ email, handleChange, invalidity }) => {
	const [touched, setTouched] = useState(false);

	const onChange = (event) => {
		handleChange(event);
	};

	const onBlur = () => {
		if (!touched) setTouched(true);
	};

	return (
		<Label>
			Email
			<InputContainer className={touched ? 'touched' : ''} title={invalidity}>
				<FaAt />
				<Input name="email" type="email" value={email} onChange={onChange} onBlur={onBlur} required />
			</InputContainer>
		</Label>
	);
};

export default EmailInput;
