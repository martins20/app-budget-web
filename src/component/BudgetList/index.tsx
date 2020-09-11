import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import BudgetCard from '../BudgetCard';
import api from '../../services/api';

interface Budget {
  id: string;
  dev_amount: number;
  designer_amount: number;
  sm_amount: number;
  po_amount: number;
  days_amount: number;
  created_at: string;
  total_price: number;
}

const BudgetList: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    handleLoadBudgets();
  }, []);

  const handleLoadBudgets = async () => {
    const { data } = await api.get('budgets');

    setBudgets(data);

    console.log(data);
  };

  return (
    <Container>
      {budgets.length > 0 &&
        budgets.map(budget => <BudgetCard budget={budget} key={budget.id} />)}
    </Container>
  );
};

export default BudgetList;
