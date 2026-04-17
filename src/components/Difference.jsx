import React from "react";
import { useIncomeStore } from "../zustand/useIncomeStore";
import { useExpenseStore } from "../zustand/useExpenseStore";
import Box from "@mui/material/Box";

function Difference() {
  const { totalExpenses } = useExpenseStore();
  const { totalIncome } = useIncomeStore();
  const heading = totalIncome - totalExpenses > 0 ? "Surplus" : "Deficit";
  return (
    <Box id="difference">
      <h2>{heading}</h2>
      <h3>R{totalIncome - totalExpenses}</h3>
    </Box>
  );
}

export default Difference;
