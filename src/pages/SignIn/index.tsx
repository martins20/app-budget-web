import React from 'react';

import Input from '../../component/Input';

import SignInBackground from '../../assets/sign-in-bg.jpeg';

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
  const handleSubmit = () => {};

  return (
    <Container>
      <Modal>
        <Image src={SignInBackground} alt="Sign In Background" />

        <FormContainer>
          <Header>
            <strong>App Budget!</strong>
            <span>Sign Up by entering the details below.</span>
          </Header>

          <Form onSubmit={e => handleSubmit}>
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
            />
            <Input
              label="confirm password"
              placeholder="*********"
              onChange={() => {}}
              type="password"
            />
          </Form>
          <SignInContainer>
            <SignUpButton>Sign Up</SignUpButton>
            <small>
              Already have an account? <a href="#">Sign In</a>
            </small>
          </SignInContainer>
        </FormContainer>
      </Modal>
    </Container>
  );
};

export default SignIn;
