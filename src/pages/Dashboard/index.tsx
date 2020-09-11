import React from 'react';

import { useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

import NavigationBar from '../../component/NavigationBar';
import MainContainer from '../../component/MainContainer';
import CurrentBudget from '../../component/CurrentBudget';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleSignOut = () => {
    logout();

    history.push('/signin');
  };

  return (
    <Container>
      <NavigationBar handleSignOut={handleSignOut} />
      <MainContainer />
      <CurrentBudget />
    </Container>
  );
};

export default Dashboard;
