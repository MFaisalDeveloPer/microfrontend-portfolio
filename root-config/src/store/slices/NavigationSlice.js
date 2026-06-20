import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",

  initialState: {
    activeView: "overview",
  },

  reducers: {
    setActiveView: (state, action) => {
      state.activeView = action.payload;
    },
  },
});

export const { setActiveView } = navigationSlice.actions;

export default navigationSlice.reducer;