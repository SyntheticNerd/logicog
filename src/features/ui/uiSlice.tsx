import { createSlice } from "@reduxjs/toolkit";

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
export default uiSlice.reducer;
