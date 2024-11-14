import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   number: "",
// };

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setSearchTerm(state, action) {
      return action.payload;
    },
  },
});

export const { setSearchTerm } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
