import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budget",
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
    addBudget: (state, action) => {
      const { name, budget, travel, entertainment, food } = action.payload;
      state.value.name = name;
      state.value.budget = budget;
      state.value.travel = travel;
      state.value.food = food;
      state.value.entertainment = entertainment;
    },
  },
});

export const { addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
