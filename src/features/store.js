import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  uiReducer,
  cartReducer,
});
