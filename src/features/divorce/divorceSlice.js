import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const divorceSlice = createSlice({
  name: "divorce",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = divorceSlice.actions;

export const selectCount = (state) => state.divorce.value;

export default divorceSlice.reducer;
