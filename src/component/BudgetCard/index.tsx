import React from 'react';
import Moment from 'react-moment';

import {
  Container,
  Color,
  Price,
  Date,
  Days,
  Description,
  Footer,
} from './styles';
import { OptionsIcon } from '../../styles/icons';
import useStore from '../../store/useStore';

interface Budget {
  budget: {
    id?: string;
    dev_amount: number;
    designer_amount: number;
    sm_amount: number;
    po_amount: number;
    days_amount: number;
    created_at?: string;
    total_price?: number;
  };
}

const BudgetCard: React.FC<Budget> = ({ budget }: Budget) => {
  const setCurrentBudget: any = useStore(state => state.setCurrentBudget);

  const {
    id,
    dev_amount,
    designer_amount,
    sm_amount,
    po_amount,
    days_amount,
    created_at,
    total_price,
  } = budget;

  // Generating a description
  const itemsToMap = [
    { amount: dev_amount, cargo: 'developer' },
    { amount: designer_amount, cargo: 'designer' },
    { amount: po_amount, cargo: 'project owner' },
    { amount: sm_amount, cargo: 'scrum master' },
  ];

  let items: any[] = [];
  // eslint-disable-next-line
  itemsToMap.map(item => {
    if (item.amount > 0) {
      items.push(`${item.amount}x ${item.cargo}`);
    }
  });

  // 1x developer, 2x designer, 4x scrum master
  const description = items.join(', ');

  // Generates handle color to simulate tags
  const pickHandleColor = () => {
    const colors = ['#ffe1e6', '#5948bc', '#d1eff9', '#ff7d35'];
    const colorIndex = Math.floor(Math.random() * 4);
    return colors[colorIndex];
  };

  let formated_price = '';

  if (total_price) {
    formated_price = total_price.toLocaleString();
  }

  return (
    <Container key={id} onClick={() => setCurrentBudget(budget)}>
      <Color color={pickHandleColor()} />
      <Price>$ {formated_price}</Price>
      <Days>{days_amount} days</Days>
      <Date>
        <Moment format="DD/MM/YY">{created_at}</Moment>
      </Date>

      <Description>{description}</Description>
      <Footer>
        <OptionsIcon />
      </Footer>
    </Container>
  );
};

export default BudgetCard;
