import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useExpenseStore } from "../zustand/useExpenseStore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ExpenseTracker() {
  const { expenseTransactions, deleteExpense } = useExpenseStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (id) => {
    deleteExpense(id);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <Button
        aria-describedby="expense-transactions"
        variant="outlined"
        onClick={handleClick}
        sx={{
          color: "#d32f2f",
          borderColor: "#d32f2f",
          borderWidth: "2px",
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: "#fef2f2",
            borderColor: "#b71c1c",
            color: "#b71c1c",
            borderWidth: "2px",
          },

          transition: "all 0.2s ease-in-out",
        }}
      >
        Expense Transactions
      </Button>
      <Popover
        id="expense-transaction-pop-up"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {expenseTransactions.map((transaction) => (
          <Typography key={transaction.id} sx={{ p: 2 }}>
            R{transaction.amount} {transaction.category}
            <IconButton
              id={transaction.id}
              aria-label="delete"
              color="primary"
              onClick={() => handleDelete(transaction.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Typography>
        ))}
      </Popover>
    </>
  );
}

export default ExpenseTracker;
