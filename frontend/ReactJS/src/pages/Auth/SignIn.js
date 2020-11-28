import React, { useState } from 'react';

import GradientButton from '../../components/GradientButton';

import api from '../../services/api';
import WarnError from '../../utils/Errors/warnError';
import Notificate from '../../utils/Notification';

import { TextualInput, PasswordInput } from '../../components/Inputs';

import { Container, ContentContainer, FormContainer } from './styles';

const INITIAL_DATA = {
  email: '',
  password: '',
  loading: false,
  showPassword: false,
};

const SignIn = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (element) => {
    const { name, value } = element.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { email, password } = data;

    try {
      if (!email) throw new WarnError('Insert your register email.');
      if (!password) throw new WarnError('Insert yor password.');
      if (password.length < 6)
        throw new WarnError('Your password has at least 6 characters.');

      const body = {
        email,
        password,
      };

      const response = await api.post('/auth', body);
      const { token, user } = response.data;

      localStorage.setItem('@Tender:token', token);
      localStorage.setItem('@Tender:user', JSON.stringify(user));

      await Notificate(`Welcome again, ${user.username}.`, 'success');

      window.location.reload();
    } catch (err) {
      setIsLoading(false);

      if (err instanceof WarnError) Notificate(err.message, 'warn');
      else {
        console.log(err);
        const error = err.response.data.message;
        Notificate(`An error occured during login: ${error}`, 'error');
      }
    }
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <h1>Welcome again!</h1>

          <form onSubmit={onSubmit}>
            <TextualInput
              type="email"
              name="email"
              label="Email"
              value={data.email}
              onChange={handleInput}
            />
            <PasswordInput value={data.password} onChange={handleInput} />

            <GradientButton type="submit" block isLoading={isLoading}>
              SIGN IN
            </GradientButton>
          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default SignIn;
