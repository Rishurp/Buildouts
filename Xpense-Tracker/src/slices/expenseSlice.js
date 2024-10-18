import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        value: [] 
    },
    reducers: {
        addExpense: (state, action) => {
           
            const newExpense = {
                ...action.payload,
                index:1+state.value.length
            }
            state.value.push(newExpense);
        },
    },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
