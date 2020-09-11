import create from 'zustand';

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

type State = {
  current_budget: Budget;
  setCurrentBudget: (newBudget: Budget) => void;
};

const useStore = create(set => ({
  current_budget: {},
  setCurrentBudget: (newBudget: Budget) => set({ current_budget: newBudget }),
}));

export default useStore;
