import React from "react";
import { useExpenseStore } from "../zustand/useExpenseStore";
import Box from "@mui/material/Box";

function Expenses() {
  const { totalExpenses } = useExpenseStore();
  return (
    <Box id="expenses">
      <h2>Total Expenses</h2>
      <h3>R {totalExpenses}</h3>
    </Box>
  );
}

export default Expenses;
