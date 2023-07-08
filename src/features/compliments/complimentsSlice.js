import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compliment: "",
};

export const complimentSlice = createSlice({
  name: "compliments",
  initialState,

  reducers: {
    setCompliment: (state, action) => {
      state.compliment = action.payload;
    },
  },
});

export const { setCompliment } = complimentSlice.actions;

export const selectCompliment = (state) => state.compliments.compliment;

export default complimentSlice.reducer;
