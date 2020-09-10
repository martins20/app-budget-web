import React, { useEffect } from 'react';

import Input from '../../component/Input';
import { useHistory } from 'react-router-dom';

import SignInBackground from '../../assets/sign-in-bg.jpeg';
import { isAuthenticated } from '../../services/auth';

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

const SignIn: React.FC = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) return history.push('/dashboard');
  }, [history]);

  const handleSignUp = async () => {
    // return history.push('/dashboard');
  };

  const handleNavigateToSignIn = () => {
    // history.push('/');
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

          <Form>
            <Input
              label="e-mail"
              placeholder="Enter your best e-mail"
              onChange={() => {}}
              type="email"
              required
            />
            <Input
              label="password"
              placeholder="*********"
              onChange={() => {}}
              type="password"
              required
            />
            <Input
              label="confirm password"
              placeholder="*********"
              onChange={() => {}}
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
