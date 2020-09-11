import React from 'react';

import { Container } from './styles';
import BudgetCard from '../BudgetCard';

const BudgetList: React.FC = () => {
  const budgets = [
    {
      id: '984c23e2-51be-4136-98f7-1cff77e05515',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 1,
      designer_amount: 2,
      sm_amount: 4,
      po_amount: 0,
      days_amount: 1,
      created_at: '2020-09-10T11:23:01.769Z',
      updated_at: '2020-09-10T11:23:01.769Z',
      total: 1800,
    },
    {
      id: '8be55112-2055-40df-8dd0-d8bd433aaee8',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 3,
      designer_amount: 0,
      sm_amount: 4,
      po_amount: 0,
      days_amount: 1,
      created_at: '2020-09-10T11:23:11.910Z',
      updated_at: '2020-09-10T11:23:11.910Z',
      total: 800,
    },
    {
      id: '19333f9a-7104-4ae6-863a-475a1126497b',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 1,
      designer_amount: 10,
      sm_amount: 2,
      po_amount: 6,
      days_amount: 3,
      created_at: '2020-09-10T18:30:27.863Z',
      updated_at: '2020-09-10T18:30:27.863Z',
      total: 1273400,
    },
    {
      id: '71abfbd0-9c28-4ce5-8635-c7f4b213fdc7',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 1,
      designer_amount: 0,
      sm_amount: 0,
      po_amount: 0,
      days_amount: 1,
      created_at: '2020-09-10T18:31:24.845Z',
      updated_at: '2020-09-10T18:31:24.845Z',
      total: 2000,
    },
    {
      id: '230bffc1-3b61-405d-9c56-1ac1352ac11b',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 1,
      designer_amount: 0,
      sm_amount: 0,
      po_amount: 0,
      days_amount: 2,
      created_at: '2020-09-10T18:31:34.116Z',
      updated_at: '2020-09-10T18:31:34.116Z',
      total: 700,
    },
    {
      id: '891d68b6-9c0c-4be6-93f6-09a903c87e2e',
      user_id: '1d5fd555-ec6e-455a-9228-71047b922d33',
      dev_amount: 1,
      designer_amount: 0,
      sm_amount: 0,
      po_amount: 0,
      days_amount: 2,
      created_at: '2020-09-10T20:19:11.918Z',
      updated_at: '2020-09-10T20:19:11.918Z',
      total: 2700,
    },
  ];

  return (
    <Container>
      {budgets.map(budget => (
        <BudgetCard budget={budget} key={budget.id} />
      ))}
    </Container>
  );
};

export default BudgetList;
