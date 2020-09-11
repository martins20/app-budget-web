import React, { useState } from 'react';

import AmountButton from '../AmountButton';
import Input from '../Input';

import { Store, Container } from './styles';
import { AddIcon } from '../MainContainer/styles';

interface Store {
  setMakingNewBudget: any;
}

const BudgetStore: React.FC<Store> = ({ setMakingNewBudget }: Store) => {
  const [loading, setLoading] = useState(false);

  const handleBudget = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMakingNewBudget(false);
    }, 2000);

    // fazer requisicao pra criar budget e pegar informações usando reduxx
  };

  return (
    <Store>
      <Container>
        <AmountButton label="Developers" />
        <AmountButton label="Designers" />
        <AmountButton label="Scrum Masters" />
        <AmountButton label="Project Owners" />
      </Container>
      <Input
        type="number"
        placeholder="Days required for the project"
        label="DAYS"
        min="0"
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
