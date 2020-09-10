import api from './api';

interface LoginProps {
  email: string;
  password: string;
  passwordConfirm?: string;
  error?: string;
  setError?: any;
  setPassword?: any;
}

const checkFormIsValid = async ({
  email,
  password,
  passwordConfirm,
  setError,
}: LoginProps) => {
  if (email.length <= 0 || !email.includes('@')) {
    setError('Email is invalid');
    return false;
  }

  if (password.length <= 0 || password.length <= 6) {
    setError('Password is invalid');
    return false;
  }

  if (passwordConfirm && passwordConfirm.length <= 0) {
    setError('password confirmation is invalid');
    return false;
  }

  if (passwordConfirm !== password) {
    setError('passwords does not match');
    return false;
  }

  // Check if credentials match
  try {
    await api.post('sessions', {
      email,
      password,
    });
  } catch (err) {
    setError(err.response.data.message);
  }

  setError('');
  return true;
};

export default checkFormIsValid;
