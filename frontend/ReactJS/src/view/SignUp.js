import React, { useState } from 'react';

import { Container, FormContainer, ContentContainer, SubmitButton } from './styles/Auth';
import WarnError from '../utils/Errors/warnError';

import { PasswordInput, TextualInput } from '../components/General/Inputs';

import api from '../services/api';
import Notificate from '../utils/Notification';

import { useHistory } from 'react-router-dom';

const INITIAL_DATA = {
	username: '',
	email: '',
	password: '',
	passwordConfirmation: '',
};

const Register = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const [isLoading, setIsLoading] = useState(false);

	const history = useHistory();

	const handleInput = (event) => {
		const { name, value } = event.target;

		setData({ ...data, [name]: value });
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		const { username, email, password, passwordConfirmation } = data;
		try {
			if (!username) throw new WarnError('A username is required to register an account.');
			if (username.length < 6) throw new WarnError('Your username must have at least 6 characters.');
			if (!email) throw new WarnError('An email is required to register an account.');
			if (!password) throw new WarnError('An password is required to register an account.');
			if (password.length < 6) throw new WarnError('Your password must have at least 6 characters.');
			if (password !== passwordConfirmation)
				throw new WarnError('Both password and password confirmation have to be equal');

			const body = {
				username,
				email,
				password,
			};
			await api.post('/account', body);

			Notificate(`Your account was registered successfully.`, 'success');

			history.push('/');
		} catch (err) {
			setIsLoading(false);

			if (err instanceof WarnError) Notificate(err.message, 'warn');
			else {
				const error = err.response.data.message;
				Notificate(`An error occured during register: ${error}`, 'error');
			}
		}
	};

	return (
		<Container>
			<ContentContainer>
				<FormContainer>
					<h1>Welcome!</h1>

					<form onSubmit={onSubmit}>
						<TextualInput
							label="Username"
							name="username"
							autocomplete="username"
							value={data.username}
							onChange={handleInput}
							required
						/>
						<TextualInput
							label="Email"
							name="email"
							type="email"
							autocomplete="email"
							value={data.email}
							onChange={handleInput}
							required
						/>
						<PasswordInput value={data.password} onChange={handleInput} />
						<PasswordInput
							label="Password confirmation"
							title="Confirm your password"
							isConfirmation={true}
							value={data.passwordConfirmation}
							onChange={handleInput}
							required
						/>

						<SubmitButton type="submit" block isLoading={isLoading} disabled={isLoading}>
							SIGN UP
						</SubmitButton>
					</form>
				</FormContainer>
			</ContentContainer>
		</Container>
	);
};

export default Register;
