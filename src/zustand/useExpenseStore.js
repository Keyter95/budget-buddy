import { create } from "zustand";

export const useExpenseStore = create((set) => ({
  totalExpenses: 0,
  expenseTransactions: [],
  addExpense: (newTrans) => {
    set((state) => ({
      totalExpenses: state.totalExpenses + Number(newTrans.amount),
      expenseTransactions: [
        ...state.expenseTransactions,
        {
          id: state.expenseTransactions.length
            ? state.expenseTransactions.length + 1
            : 1,
          amount: Number(newTrans.amount),
          category: newTrans.category,
        },
      ],
    }));
  },
  deleteExpense: (transId) => {
    set((state) => {
      const transactionToDelete = state.expenseTransactions.find(
        (t) => t.id === transId,
      );
      if (!transactionToDelete) return state;

      return {
        totalExpenses: state.totalExpenses - Number(transactionToDelete.amount),
        expenseTransactions: state.expenseTransactions.filter(
          (t) => t.id !== transId,
        ),
      };
    });
  },
}));
