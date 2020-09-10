import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout, isAuthenticated } from '../../services/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleSignOut = () => {
    logout();

    history.push('/signin');
  };
  return <button onClick={handleSignOut}>Sair</button>;
};

export default Dashboard;
