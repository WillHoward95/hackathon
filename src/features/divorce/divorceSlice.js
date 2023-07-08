import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateArray: [],
  counter: 0,
};

export const divorceSlice = createSlice({
  name: "divorce",
  initialState,
  reducers: {
    setNewDate: (state, action) => {
      state.dateArray.push(action.payload);

      state.newDateInput = undefined;
      state.newDateTitle = "";
      state.counter += 1;
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
    deleteOcassion: (state, action) => {
      const index = state.dateArray.findIndex((element) => {
        return action.payload === element.id;
      });

      state.dateArray.splice(index, 1);
    },
  },
});

export const {
  setNewDate,
  newDateInput,
  setNewDateTitle,
  setCurrentDate,
  deleteOcassion,
} = divorceSlice.actions;

export const selectDateArray = (state) => state.divorce.dateArray;
export const selectDateInput = (state) => state.divorce.newDateInput;
export const selectNewDateTitle = (state) => state.divorce.newDateTitle;
export const selectCurrentDate = (state) => state.divorce.currentDate;
export const selectCounter = (state) => state.divorce.counter;

export default divorceSlice.reducer;
