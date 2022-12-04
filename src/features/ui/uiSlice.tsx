import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  navOpen: false,
  cartOpen: false,
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
  },
});

export const { toggleNav, openCart, closeCart, toggleCart } = uiSlice.actions;
export const cartOpen = (state: RootState) => state.uiControl.cartOpen;
export const navOpenState = (state: RootState) => state.uiControl.navOpen;
export default uiSlice.reducer;
