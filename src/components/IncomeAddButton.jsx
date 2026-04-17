import React, { useState } from "react";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useIncomeStore } from "../zustand/useIncomeStore";

function IncomeAddButton() {
  const { addIncome } = useIncomeStore();
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleAmntChange = (event) => {
    setAmount(event.target.value);
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

  const handleIncomeOpen = () => {
    setIncomeOpen(true);
  };
  const handleIncomeClose = () => {
    if (amount && category) {
      addIncome({ category, amount });
    }
    setIncomeOpen(false);
    setCategory("");
    setAmount(0);
  };
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<RemoveIcon />}
        onClick={handleIncomeOpen}
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

          transition: "all 0.3s ease",
        }}
      >
        Add Income
      </Button>
      <Modal
        id="AddIncome"
        open={incomeOpen}
        onClose={handleIncomeClose}
        aria-labelledby="add-income"
        aria-describedby="add-income"
      >
        <Box id="income_modal" sx={{ ...style }}>
          <h2 id="add-income">Add income</h2>
          <TextField
            label="Amount"
            id="income-amount"
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
              id="inc_category_select"
              label="Category"
            >
              <MenuItem value={"Bonus"}>
                <i class="fa-solid fa-money-bill-trend-up"></i> Bonus
              </MenuItem>
              <MenuItem value={"Subsidy"}>
                <i class="fa-solid fa-money-bill-wheat"></i> Subsidy
              </MenuItem>
              <MenuItem value={"Salary"}>
                <i class="fa-solid fa-comment-dollar"></i> Salary
              </MenuItem>
              <MenuItem value={"Housesitting"}>
                <i class="fa-regular fa-house"></i> Housesitting
              </MenuItem>
              <MenuItem value={"Dog-walking"}>
                <i class="fa-solid fa-dog"></i> Dog Walking
              </MenuItem>
              <MenuItem value={"Proof-reading"}>
                <i class="fa-solid fa-book-open-reader"></i> Proof Reading
              </MenuItem>
              <MenuItem value={"Tutoring"}>
                <i class="fa-brands fa-screenpal"></i> Tutoring
              </MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleIncomeClose} variant="outlined">
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default IncomeAddButton;
