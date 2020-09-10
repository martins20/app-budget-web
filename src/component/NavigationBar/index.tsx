import React, { useState } from 'react';

import { Container, NavigationItems, LogoutButton, UserAvatar } from './styles';

import {
  DashboardIcon,
  LogOutIcon,
  CreateBudgetIcon,
  SettingsIcon,
} from '../../styles/icons';

import NavigationItem from '../NavigationItem';

interface NavigationProps {
  handleSignOut: Function;
}

const NavigationBar: React.FC<NavigationProps> = ({
  handleSignOut,
}: NavigationProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (newActiveTab: number) => {
    setActiveTab(newActiveTab);
  };

  return (
    <Container>
      <NavigationItems>
        <NavigationItem
          icon={DashboardIcon}
          location="/dashboard"
          active={activeTab === 0}
          handleActiveTab={handleActiveTab}
          handleActiveTabIndex={0}
        />
        <NavigationItem
          icon={CreateBudgetIcon}
          location="/budgets"
          active={activeTab === 1}
          handleActiveTab={handleActiveTab}
          handleActiveTabIndex={1}
        />
        <NavigationItem
          icon={SettingsIcon}
          location="/settings"
          active={activeTab === 2}
          handleActiveTab={handleActiveTab}
          handleActiveTabIndex={2}
        />
      </NavigationItems>
      <LogoutButton onClick={() => handleSignOut()}>
        <UserAvatar src="https://placekitten.com/200/200" alt="avatar" />
        <LogOutIcon />
      </LogoutButton>
    </Container>
  );
};

export default NavigationBar;
