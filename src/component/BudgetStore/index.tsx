import React, { useState } from 'react';

import useStore from '../../store/useStore';

import Input from '../Input';

import { Store } from './styles';
import { AddIcon } from '../MainContainer/styles';
import api from '../../services/api';

interface Store {
  setMakingNewBudget: any;
}

const BudgetStore: React.FC<Store> = ({ setMakingNewBudget }: Store) => {
  const makeBudget: any = useStore(state => state.makeBudget);

  const [loading, setLoading] = useState(false);
  const [devs, setDevs] = useState('');
  const [designers, setDesigners] = useState('');
  const [sm, setSm] = useState('');
  const [po, setPo] = useState('');
  const [days, setDays] = useState('');
  const [error, setError] = useState('');

  const handleBudget = async () => {
    setLoading(true);

    if (!days) {
      setError('Please inform the days required for this project');
      return;
    }

    setLoading(false);
    setMakingNewBudget(false);

    const new_budget = {
      dev_amount: devs ? Number(devs) : 0,
      designer_amount: designers ? Number(designers) : 0,
      sm_amount: sm ? Number(sm) : 0,
      po_amount: po ? Number(po) : 0,
      days_amount: Number(days),
    };

    const { data } = await api.post('budgets', new_budget);

    makeBudget(data);
  };

  return (
    <Store>
      {error && <span>{error}</span>}
      <Input
        type="number"
        placeholder="Devs amount"
        label="Devs"
        min="0"
        value={devs}
        onChange={e => setDevs(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="Designers amount"
        label="Designers"
        min="0"
        value={designers}
        onChange={e => setDesigners(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="Scrum master amount"
        label="Scrum master"
        min="0"
        value={sm}
        onChange={e => setSm(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="Project owner amount"
        label="Project owner"
        min="0"
        value={po}
        onChange={e => setPo(e.currentTarget.value)}
      />

      <Input
        type="number"
        placeholder="Days required for the project"
        label="DAYS"
        min="0"
        value={days}
        onChange={e => setDays(e.currentTarget.value)}
      />
      <button onClick={handleBudget}>
        {loading ? (
          'loading..'
        ) : (
          <>
            <AddIcon />
            Finish Budget
          </>
        )}
      </button>
    </Store>
  );
};

export default BudgetStore;
