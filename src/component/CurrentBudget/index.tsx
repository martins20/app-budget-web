import React from 'react';

import CargoItem from '../CargoItem';

import { Container, Header, Footer } from './styles';
import useStore from '../../store/useStore';

interface Budget {
  id?: string;
  user_id?: string;
  dev_amount?: string;
  designer_amount?: number;
  sm_amount?: number;
  po_amount?: number;
  days_amount?: number;
}

const CurrentBudget: React.FC = () => {
  const current_budget: Budget | any = useStore(state => state.current_budget);

  const formated_price = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  }).format(current_budget.total_price);

  return (
    <Container shouldShow={current_budget.total_price > 0}>
      <Header>
        <h1>Project Resume</h1>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Project"
        />

        <b>$ {formated_price}</b>
        <small>{current_budget.days_amount} days x $200</small>
      </Header>
      <Footer>
        {current_budget.dev_amount > 0 && (
          <CargoItem
            cargo="Developer"
            color="#432cff"
            mathRecipe={`$1000 x ${current_budget.dev_amount} + 15%`}
          />
        )}
        {current_budget.designer_amount > 0 && (
          <CargoItem
            cargo="Designer"
            color="#ffe1e6"
            mathRecipe={`$1000 x ${current_budget.designer_amount} + 5%`}
          />
        )}
        {current_budget.sm_amount > 0 && (
          <CargoItem
            cargo="Scrum Master"
            color="#d1eff9"
            mathRecipe={`$900 x ${current_budget.sm_amount} + 12%`}
          />
        )}
        {current_budget.po_amount > 0 && (
          <CargoItem
            cargo="Project Owner"
            color="#ff7d35"
            mathRecipe={`$1500 x ${current_budget.po_amount} + 10%`}
          />
        )}
      </Footer>
    </Container>
  );
};

export default CurrentBudget;
