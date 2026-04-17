import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useIncomeStore } from "../zustand/useIncomeStore";
import { useExpenseStore } from "../zustand/useExpenseStore";
function BudgetPieChart() {
  const { totalExpenses } = useExpenseStore();
  const { totalIncome } = useIncomeStore();
  const transactions =
    totalExpenses === 0 && totalIncome === 0
      ? "Add some transactions!"
      : "Expenditure";
  const difference = totalIncome - totalExpenses;
  const labelPie = totalIncome - totalExpenses > 0 ? "Surplus" : "Shortfall";
  const pieColor = difference > 0 ? "rgba(229, 231, 235, 0.8)" : "#111827";
  return (
    <>
      <h2>{transactions}</h2>
      <PieChart
        id="PieChart"
        series={[
          {
            data: [
              {
                id: 0,
                value: totalExpenses,
                label: "Expenses",
                color: "rgba(147, 51, 234, 0.3) ",
              },
              {
                id: 1,
                value: totalIncome,
                label: "Income",
                color: "#9333ea",
              },
              {
                id: 2,
                value: Math.abs(difference),
                label: labelPie,
                color: pieColor,
              },
            ],
            // This creates the "Donut" look we often see in budget apps
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
}

export default BudgetPieChart;
