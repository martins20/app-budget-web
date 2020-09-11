import React from 'react';

import CargoItem from '../CargoItem';

import { Container, Header, Footer } from './styles';

interface Budget {
  id?: string;
  user_id?: string;
  dev_amount?: string;
  designer_amount?: number;
  sm_amount?: number;
  po_amount?: number;
  days_amount?: number;
}

const CurrentBudget: React.FC<Budget> = ({
  id,
  user_id,
  dev_amount,
  designer_amount,
  sm_amount,
  po_amount,
  days_amount,
}) => {
  return (
    <Container>
      <Header>
        <h1>Total Project</h1>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Project"
        />

        <b>$ 12.908</b>
        <small>125 days</small>
      </Header>
      <Footer>
        <CargoItem
          cargo="Developer"
          color="#432cff"
          mathRecipe="1000 x 1 + 15%"
        />
      </Footer>
    </Container>
  );
};

export default CurrentBudget;
