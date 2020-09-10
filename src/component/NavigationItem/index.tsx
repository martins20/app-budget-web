import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container } from './styles';

interface NavigationProps {
  icon: StyledIcon;
  location: string;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationProps> = ({
  icon: Icon,
  location,
  active,
}: NavigationProps) => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};

export default NavigationItem;
