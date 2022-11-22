import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleLoggedIn: (state, action)=>{
        state.loggedIn = !state.loggedIn;
    }
  },
});

export default authSlice.reducer;
