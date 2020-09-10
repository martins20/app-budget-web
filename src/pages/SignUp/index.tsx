import React, { useEffect, useState } from 'react';

import Input from '../../component/Input';
import { useHistory } from 'react-router-dom';

import SignInBackground from '../../assets/sign-in-bg.jpeg';
import { isAuthenticated, login } from '../../services/auth';

import {
  Container,
  Modal,
  Image,
  Form,
  FormContainer,
  Header,
  SignUpButton,
  SignInContainer,
} from './styles';
import checkFormIsValid from '../../services/validators';
import api from '../../services/api';

interface Response {
  token: string;
  user: User;
}

interface User {
  id: string;
}

const SignIn: React.FC = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) return history.push('/dashboard');
  }, [history]);

  const handleNavigateToSignIn = () => {
    history.push('/signin');
  };

  const handleSignUp = async () => {
    // return history.push('/dashboard');
    if (
      checkFormIsValid({ email, password, passwordConfirm, setError }) &&
      passwordConfirm.length > 0 &&
      passwordConfirm === password
    ) {
      try {
        // Register user in database
        await api.post<Response>('users', {
          email,
          password,
        });
      } catch (err) {
        setError(err.response.data.message);
      }

      //  After registering we use the same data to login automatically
      const { data } = await api.post<Response>('sessions', {
        email,
        password,
      });

      login(data.token, data.user.id);

      return history.push('/dashboard');
    }
  };
  return (
    <Container>
      <Modal>
        <Image src={SignInBackground} alt="Sign In Background" />

        <FormContainer>
          <Header>
            <strong>Register now!</strong>
            <span>Sign Up by entering the details below.</span>
          </Header>

          <Form onSubmit={handleSignUp}>
            <span>{error}</span>
            <Input
              label="e-mail"
              placeholder="Enter your best e-mail"
              onChange={e => {
                setEmail(e.currentTarget.value);
                setError('');
              }}
              value={email}
              type="email"
              required
            />
            <Input
              label="password"
              placeholder="*********"
              onChange={e => {
                setPassword(e.currentTarget.value);
                setError('');
              }}
              type="password"
              required
            />
            <Input
              label="confirm password"
              placeholder="*********"
              onChange={e => {
                setPasswordConfirm(e.currentTarget.value);
                setError('');
              }}
              type="password"
              required
            />
          </Form>
          <SignInContainer>
            <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
            <small>
              Already have an account?{' '}
              <a href="/signin" onClick={handleNavigateToSignIn}>
                Sign In
              </a>
            </small>
          </SignInContainer>
        </FormContainer>
      </Modal>
    </Container>
  );
};

export default SignIn;
