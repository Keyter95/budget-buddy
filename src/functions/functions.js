export const addExpense = () => {
  const expenseCat = document.getElementById("exp_category_select").value;
  const expenseAmnt = document.getElementById("expense-amount").value;
  return { category: expenseCat, amount: expenseAmnt };
};
export const addIncome = () => {
  const incomeCat = document.getElementById("inc_category_select").value;
  const incomeAmnt = document.getElementById("income-amount").value;
  return { category: incomeCat, amount: incomeAmnt };
};
