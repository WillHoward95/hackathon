import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateArray: [],
};

export const divorceSlice = createSlice({
  name: "divorce",
  initialState,
  reducers: {
    setNewDate: (state, action) => {
      console.log(action.payload);
      state.dateArray.push(action.payload);

      state.newDateInput = undefined;
      state.newDateTitle = "";
    },
    newDateInput: (state, action) => {
      state.newDateInput = action.payload;
    },
    setNewDateTitle: (state, action) => {
      state.newDateTitle = action.payload;
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const { setNewDate, newDateInput, setNewDateTitle, setCurrentDate } =
  divorceSlice.actions;

export const selectDateArray = (state) => state.divorce.dateArray;
export const selectDateInput = (state) => state.divorce.newDateInput;
export const selectNewDateTitle = (state) => state.divorce.newDateTitle;
export const selectCurrentDate = (state) => state.divorce.currentDate;

export default divorceSlice.reducer;
