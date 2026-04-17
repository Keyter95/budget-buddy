import { create } from "zustand";

export const useIncomeStore = create((set) => ({
  totalIncome: 0,
  incomeTransactions: [],
  addIncome: (newTrans) => {
    set((state) => ({
      totalIncome: state.totalIncome + Number(newTrans.amount),
      incomeTransactions: [
        ...state.incomeTransactions,
        {
          id: state.incomeTransactions.length + 1,
          amount: Number(newTrans.amount),
          category: newTrans.category,
        },
      ],
    }));
  },
  deleteIncome: (transId) => {
    set((state) => {
      const transactionToDelete = state.incomeTransactions.find(
        (t) => t.id === transId,
      );
      if (!transactionToDelete) return state;

      return {
        totalIncome: state.totalIncome - Number(transactionToDelete.amount),
        incomeTransactions: state.incomeTransactions.filter(
          (t) => t.id !== transId,
        ),
      };
    });
  },
}));
