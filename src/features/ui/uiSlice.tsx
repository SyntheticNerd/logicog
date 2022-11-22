import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

export const uiSlice = createSlice({
  name: "uiControl",
  initialState: initialState,
  reducers: {
    toggleNav: (state, action) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export default uiSlice.reducer;
