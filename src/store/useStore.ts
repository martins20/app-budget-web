import create from 'zustand';

interface Budget {
  id?: string;
  dev_amount: number;
  designer_amount: number;
  sm_amount: number;
  po_amount: number;
  days_amount: number;
  created_at?: string;
  total_price?: number;
}

const useStore = create(set => ({
  current_budget: {},
  new_budget: {},
  setCurrentBudget: (newBudget: Budget) => set({ current_budget: newBudget }),
  makeBudget: (newBudget: Budget) => set({ new_budget: newBudget }),
}));

export default useStore;
