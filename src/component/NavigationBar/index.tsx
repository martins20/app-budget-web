import React from 'react';

import { Container, NavigationItems, LogoutButton, UserAvatar } from './styles';

import NavigationItem from '../NavigationItem';

import { DashboardIcon, LogOutIcon } from '../../styles/icons';

const NavigationBar: React.FC = () => {
  return (
    <Container>
      <NavigationItems>
        <NavigationItem icon={DashboardIcon} location="/dashboard" active />
      </NavigationItems>
      <LogoutButton>
        <UserAvatar src="https://placekitten.com/200/200" alt="avatar" />
        <LogOutIcon />
      </LogoutButton>
    </Container>
  );
};

export default NavigationBar;
