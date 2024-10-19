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
      others: 0,
    },
  },
  reducers: {
    addBudget: (state, action) => {
      const { name, budget, travel, entertainment, food } = action.payload;
      state.value.name = name;
      state.value.budget = Number(budget);
      state.value.travel = Number(travel);
      state.value.food = Number(food);
      state.value.entertainment = Number(entertainment);
      state.value.others =
        Number(budget) -
        (Number(travel) + Number(entertainment) + Number(food));
    },
  },
});

export const { addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
