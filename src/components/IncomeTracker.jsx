import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useIncomeStore } from "../zustand/useIncomeStore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function IncomeTracker() {
  const { incomeTransactions, deleteIncome } = useIncomeStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (id) => {
    deleteIncome(id);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <Button
        aria-describedby="income-transactions"
        variant="outlined"
        onClick={handleClick}
        sx={{
          color: "#2e7d32",
          borderColor: "#2e7d32",
          borderWidth: "2px",
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: "#f1f8e9",
            borderColor: "#1b5e20",
            color: "#1b5e20",
            borderWidth: "2px",
          },
        }}
      >
        Income Transactions
      </Button>
      <Popover
        id="income-transaction-pop-up"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {incomeTransactions.map((transaction) => (
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
export default IncomeTracker;
