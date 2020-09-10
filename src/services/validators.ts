import api from './api';

interface LoginProps {
  email: string;
  password: string;
  error?: string;
  setError?: any;
  setPassword?: any;
}

const checkFormIsValid = async ({
  email,
  password,
  error,
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
  setError('');

  // Check if credentials match
  try {
    const { data } = await api.post('sessions', {
      email,
      password,
    });

    console.log(data);
  } catch (err) {
    setError(err.response.data.message);
  }

  return true;
};

export default checkFormIsValid;
