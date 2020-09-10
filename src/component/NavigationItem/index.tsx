import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container } from './styles';
import { useHistory } from 'react-router-dom';

interface NavigationProps {
  icon: StyledIcon;
  location: string;
  active?: boolean;
  handleActiveTab: Function;
  handleActiveTabIndex: number;
}

const NavigationItem: React.FC<NavigationProps> = ({
  icon: Icon,
  location,
  active,
  handleActiveTab,
  handleActiveTabIndex,
}: NavigationProps) => {
  const history = useHistory();

  const handleNavigateTo = (location: string) => {
    handleActiveTab(handleActiveTabIndex);
    history.push(location);
  };
  return (
    <Container active={active} onClick={() => handleNavigateTo(location)}>
      <Icon />
    </Container>
  );
};

export default NavigationItem;
