import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useExpenseStore } from "../zustand/useExpenseStore";

function ExpenseAddButton() {
  const { addExpense } = useExpenseStore();
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleAmntChange = (event) => {
    setAmount(Number(event.target.value));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 300,

    bgcolor: "#ffffff",
    color: "#374151",

    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: 24,

    pt: 2,
    px: 4,
    pb: 3,

    display: "flex",
    flexDirection: "column",
    outline: "none",
  };
  const handleExpenseOpen = () => {
    setExpenseOpen(true);
  };
  const handleExpenseClose = () => {
    if (amount && category) {
      addExpense({ amount, category });
    }
    setExpenseOpen(false);
    setCategory("");
    setAmount(0);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleExpenseOpen}
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
        Add Expense
      </Button>
      <Modal
        id="AddExpense"
        open={expenseOpen}
        onClose={handleExpenseClose}
        aria-labelledby="add-expense"
        aria-describedby="add-expense"
      >
        <Box id="expense_modal" sx={{ ...style }}>
          <h2 id="add-expense">Add expense</h2>
          <TextField
            label="Amount"
            id="expense-amount"
            type="number"
            value={amount}
            onChange={handleAmntChange}
            fullWidth
            slotProps={{
              htmlInput: {
                min: 1,
                step: 10,
              },
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="category_label">Category</InputLabel>
            <Select
              value={category}
              onChange={handleChange}
              labelId="category_label"
              id="exp_category_select"
              label="Category"
            >
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Groceries"}>
                <i class="fa-solid fa-bag-shopping"></i> Groceries
              </MenuItem>
              <MenuItem value={"Vehicle"}>
                <i class="fa-solid fa-car"></i> Vehicle
              </MenuItem>
              <MenuItem value={"Pets"}>
                <i class="fa-solid fa-bone"></i> Pets
              </MenuItem>
              <MenuItem value={"Children"}>
                <i class="fa-solid fa-child"></i> Children
              </MenuItem>
              <MenuItem value={"Insurance"}>
                <i class="fa-solid fa-briefcase-medical"></i> Medical Aid
              </MenuItem>
              <MenuItem value={"Education"}>
                <i class="fa-solid fa-book-open"></i> Education
              </MenuItem>
              <MenuItem value={"Accommodation"}>
                <i class="fa-solid fa-house"></i> Accommodation
              </MenuItem>
              <MenuItem value={"Entertainment"}>
                <i class="fa-brands fa-playstation"></i> Entertainment
              </MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleExpenseClose} variant="outlined">
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ExpenseAddButton;
