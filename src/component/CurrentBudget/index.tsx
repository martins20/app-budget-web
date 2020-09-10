import React from 'react';

import { Container, Header, Footer, CargoItem } from './styles';
import { OptionsIcon } from '../../styles/icons';

interface Budget {
  id?: string;
  user_id?: string;
  designer_amount?: number;
  sm_amount?: number;
  po_amount?: number;
  days_amount?: number;
}

const CurrentBudget: React.FC<Budget> = ({
  id,
  user_id,
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
          src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="Project Photo"
        />

        <b>3 Completed</b>
        <small>from 5 project</small>
      </Header>
      <Footer>
        <CargoItem>
          <div />
          <section>
            <b>Layouting</b>
            <small>by Paulo Martins</small>
          </section>
          <OptionsIcon />
        </CargoItem>
      </Footer>
    </Container>
  );
};

export default CurrentBudget;
