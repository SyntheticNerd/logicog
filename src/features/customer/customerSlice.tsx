import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CustomerState {
  firstName: String;
  lastName: String;
  email: String;
  cart: { items: { productId: any; quantity: number; _id: any }[] };
  isLoggedIn: Boolean;
}

const initialState: CustomerState = {
  firstName: "",
  lastName: "",
  email: "",
  cart: { items: [] },
  isLoggedIn: false,
};

export const fetchCustomer = createAsyncThunk(
  "customers/fetchCustomer",
  async () => {
    console.log("executing async thunk");
    const sid = localStorage.getItem("sid");
    const result = await fetch(
      "https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev/customers/current",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: sid,
        }),
      }
    );
    const data = await result.json();
    if (data.customer) {
      console.log("In this if statement");
      return data.customer;
    } else {
      throw new Error("Customer not logged in.");
    }
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    // getCustomer(state)=>{
    //   return state;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      let copy = action.payload;
      copy.isLoggedIn = true;
      console.log("Success", state);
      return copy;
    });
    builder.addCase(fetchCustomer.pending, (state, action) => {
      console.log("PENDING");
    });
    builder.addCase(fetchCustomer.rejected, (state, action) => {
      console.log("Customer not logged in");
    });
  },
});

export default customerSlice.reducer;
export const customerState = (state: RootState) => state.customer;
