import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    value: [],
    filterValue: [],
  },
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        ...action.payload,
        id: Date.now(), // Use a unique ID
        index: state.value.length + 1, // Keep the same index strategy for display
      };
      state.value.push(newExpense);
    },
    deleteExpense: (state, action) => {
      // Remove the expense with the matching ID
      state.value = state.value.filter((expense) => expense.id !== action.payload);
    },
    addFilterExpense: (state, action) => {
      state.filterValue.push(action.payload);
    },
  },
});

export const { addExpense, deleteExpense, addFilterExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
