import React from "react";
import { useIncomeStore } from "../zustand/useIncomeStore";
import Box from "@mui/material/Box";

function Incomes() {
  const { totalIncome } = useIncomeStore();
  return (
    <Box id="incomes">
      <h2>Total Incomes</h2>
      <h3>R {totalIncome}</h3>
    </Box>
  );
}

export default Incomes;
