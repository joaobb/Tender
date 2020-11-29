import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import GradientButton from '../../components/GradientButton';
import { TextualInput, PasswordInput } from '../../components/Inputs';
import UserContext from '../../contexts/userContext';
import api from '../../services/api';
import WarnError from '../../utils/Errors/warnError';
import Notificate from '../../utils/Notification';

import { Container, ContentContainer, FormContainer } from './styles';

const INITIAL_DATA = {
  email: '',
  password: '',
  loading: false,
  showPassword: false,
};

const SignIn = () => {
  const history = useHistory();

  const [data, setData] = useState(INITIAL_DATA);

  const [isLoading, setIsLoading] = useState(false);

  const { setUserData } = useContext(UserContext);

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

      setUserData({ token, ...user });
      localStorage.setItem('@Tender:token', token);
      localStorage.setItem('@Tender:user', JSON.stringify(user));

      Notificate(`Welcome again, ${user.username}.`, 'success');

      history.push('/');
    } catch (err) {
      setIsLoading(false);

      if (err instanceof WarnError) Notificate(err.message, 'warn');
      else {
        console.log(err);
        const error = err.response.data.message;
        Notificate(`An error occurred during login: ${error}`, 'error');
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
              block
              type="email"
              name="email"
              label="Email"
              value={data.email}
              onChange={handleInput}
              required
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
