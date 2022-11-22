import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "localCart",
  initialState: initialState,
  reducers: {},
});

export default cartSlice.reducer;
