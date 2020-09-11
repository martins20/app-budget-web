import React, { useState } from 'react';

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
  TitleContainer,
  AddIcon,
  FilterContainer,
} from './styles';
import BudgetStore from '../BudgetStore';

const MainContainer: React.FC = () => {
  const [makingNewBudget, setMakingNewBudget] = useState(false);

  const handleMakeNewBudget = () => {
    if (makingNewBudget) return;

    setMakingNewBudget(!makingNewBudget);
  };

  return (
    <Container>
      <Header>
        <SearchContainer>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <SearchInput placeholder="Search projects here" />
        </SearchContainer>
        <NotificationContainer>
          <NotificationIcon />
          <NoteIcon />
        </NotificationContainer>
      </Header>
      <Heading>
        <TitleContainer>
          <Title>My Budgets</Title>
          <button
            onClick={handleMakeNewBudget}
            className={makingNewBudget ? 'unable' : ''}
          >
            <AddIcon />
            Make Budget
          </button>
        </TitleContainer>

        <FilterContainer>
          <span>Sort By</span>
          <strong>Recent Projects</strong>
          <FilterIcon />
        </FilterContainer>
      </Heading>

      {makingNewBudget ? (
        <BudgetStore setMakingNewBudget={setMakingNewBudget} />
      ) : (
        <BudgetList />
      )}
    </Container>
  );
};

export default MainContainer;
