import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateArray: [],
};

export const divorceSlice = createSlice({
  name: "divorce",
  initialState,
  reducers: {
    setNewDate: (state, action) => {
      state.dateArray.push(action.payload);
    },
    newDateInput: (state, action) => {
      state.newDateInput = action.payload;
    },
    setNewDateTitle: (state, action) => {
      state.newDateTitle = action.payload;
    },
  },
});

export const { setNewDate, newDateInput, setNewDateTitle } =
  divorceSlice.actions;

export const selectDateArray = (state) => state.divorce.dateArray;
export const selectDateInput = (state) => state.divorce.newDateInput;
export const selectNewDateTitle = (state) => state.divorce.newDateTitle;

export default divorceSlice.reducer;
