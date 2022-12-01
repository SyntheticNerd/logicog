import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import customerReducer from "./customer/customerSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
