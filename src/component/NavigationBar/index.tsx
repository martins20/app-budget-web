import React, { useState, useEffect } from 'react';

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
  activeTabParam?: number;
}

const NavigationBar: React.FC<NavigationProps> = ({
  handleSignOut,
  activeTabParam,
}: NavigationProps) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (activeTabParam) {
      setActiveTab(activeTabParam);
    }
  }, [activeTabParam]);

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
        {/* New tab examples */}
        <NavigationItem
          icon={CreateBudgetIcon}
          location="/#"
          active={activeTab === 1}
          handleActiveTab={handleActiveTab}
          handleActiveTabIndex={1}
        />
        <NavigationItem
          icon={SettingsIcon}
          location="/#"
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
