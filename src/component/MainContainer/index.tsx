import React from 'react';

import { SearchIcon, NotificationIcon, NoteIcon } from '../../styles/icons';

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
  SelectButton,
  DropBoxMenuIcon,
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
          {/* <NotificationIcon hasNotification /> */}
          <NotificationIcon />
          <NoteIcon />
        </NotificationContainer>
      </Header>
      <Heading>
        <Title>My Budgets</Title>

        <FilterContainer>
          <span>Sort By</span>
          <SelectButton>
            <DropBoxMenuIcon />
          </SelectButton>
        </FilterContainer>
      </Heading>

      <BudgetList />
    </Container>
  );
};

export default MainContainer;
