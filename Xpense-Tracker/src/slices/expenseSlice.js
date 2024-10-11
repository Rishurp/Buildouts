import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    value: {
      name: "",
      budget: 0,
      travel: 0,
      food: 0,
      entertainment: 0,
    },
  },
  reducers: {
    addExpense: (state, action) => {
      const { name, budget, travel, entertainment, food } = action.payload;
      state.value.name = name;
      state.value.budget = budget;
      state.value.travel = travel;
      state.value.food = food;
      state.value.entertainment = entertainment;
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
