import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import BudgetCard from '../BudgetCard';
import api from '../../services/api';
import useStore from '../../store/useStore';

interface Budget {
  id?: string;
  dev_amount: number;
  designer_amount: number;
  sm_amount: number;
  po_amount: number;
  days_amount: number;
  created_at?: string;
  total_price: number;
}

const BudgetList: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const new_budget = useStore(state => state.new_budget);

  useEffect(() => {
    // Fazer o loading sempre que for criado um novo Budgets
    handleLoadBudgets();
  }, [new_budget]);

  const handleLoadBudgets = async () => {
    const { data } = await api.get('budgets');

    setBudgets(data);
  };

  return (
    <Container>
      {budgets.length > 0 &&
        budgets.map(budget => <BudgetCard budget={budget} key={budget.id} />)}
    </Container>
  );
};

export default BudgetList;
