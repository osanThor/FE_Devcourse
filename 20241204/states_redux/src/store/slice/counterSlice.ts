import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    decrement: (state) => {
      state.count = state.count - 1;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
