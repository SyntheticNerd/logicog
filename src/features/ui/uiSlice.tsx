import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  navOpen: false,
  cartOpen: false,
  peak: false,
  top: true,
};

export const uiSlice = createSlice({
  name: "uiControl",
  initialState: initialState,
  reducers: {
    toggleNav: (state, action) => {
      state.navOpen = !state.navOpen;
    },
    openCart: (state, action) => {
      state.cartOpen = true;
    },
    closeCart: (state, action) => {
      state.cartOpen = false;
    },
    toggleCart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },
    openPeak: (state, action) => {
      state.peak = true;
    },
    closePeak: (state, action) => {
      state.peak = false;
    },
    togglePeak: (state, action) => {
      state.peak = !state.peak;
    },
    setTop: (state, action) => {
      state.top = action.payload;
    },
  },
});

export const {
  toggleNav,
  openCart,
  closeCart,
  toggleCart,
  openPeak,
  closePeak,
  setTop,
} = uiSlice.actions;
export const cartOpen = (state: RootState) => state.uiControl.cartOpen;
export const peakState = (state: RootState) => state.uiControl.peak;
export const navOpenState = (state: RootState) => state.uiControl.navOpen;
export const topState = (state: RootState) => state.uiControl.top;
export default uiSlice.reducer;
