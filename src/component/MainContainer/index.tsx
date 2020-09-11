import React from 'react';

import {
  SearchIcon,
  NotificationIcon,
  NoteIcon,
  FilterIcon,
} from '../../styles/icons';

import BudgetList from '../BudgetList';

import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  SearchButton,
  NotificationContainer,
  Heading,
  Title,
  FilterContainer,
} from './styles';

const MainContainer: React.FC = () => {
  return (
    <Container>
      <Header>
        <SearchContainer>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <SearchInput placeholder="Search here" />
        </SearchContainer>
        <NotificationContainer>
          <NotificationIcon />
          <NoteIcon />
        </NotificationContainer>
      </Header>
      <Heading>
        <Title>My Budgets</Title>

        <FilterContainer>
          <span>Sort By</span>
          <strong>Recent Projects</strong>
          <FilterIcon />
        </FilterContainer>
      </Heading>

      <BudgetList />
    </Container>
  );
};

export default MainContainer;
