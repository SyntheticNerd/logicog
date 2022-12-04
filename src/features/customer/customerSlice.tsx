import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductToCartApi, changeQuantityApi } from "../../utils/apiHelpers";
import { RootState } from "../store";

interface CustomerState {
  firstName: String;
  lastName: String;
  email: String;
  cart: {
    items: { productId: any; styleId: any; quantity: number; _id?: any }[];
  };
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
//TODO if cart has items and customer logs in merge cart items
export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { productId, styleId } = action.payload;

      const cartProductIndex = state.cart.items.findIndex((cp) => {
        return cp.productId.toString() === productId.toString();
      });

      let newQuantity = 1;
      const updatedCartItems = [...state.cart.items];
      if (cartProductIndex >= 0) {
        newQuantity = state.cart.items[cartProductIndex].quantity + 1;
        updatedCartItems[cartProductIndex].quantity = newQuantity;
      } else {
        updatedCartItems.push({
          productId: productId,
          styleId: styleId,
          quantity: newQuantity,
        });
      }
      const updatedCart = {
        items: updatedCartItems,
      };
      state.cart = updatedCart;
      console.log("UPDATED CART in Redux", state.cart);
      if (state.isLoggedIn) {
        addProductToCartApi(productId, styleId)
          .then((res) => console.log(res))
          .catch((err) => console.log("ERROR", err));
      }
    },
    changeQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      console.log(productId, newQuantity);
      //find item in cart
      const cartProductIndex = state.cart.items.findIndex((cp) => {
        return cp.productId.toString() === productId.toString();
      });

      console.log(cartProductIndex);

      let updatedCartItems = [...state.cart.items];
      if (cartProductIndex === undefined || cartProductIndex === null) {
        console.log("PRODUCT DOES NOT EXIST IN CART");
      } else if (newQuantity <= 0) {
        //filter out items that are not the item with 0 quantity
        console.log("DELETEING");
        updatedCartItems = updatedCartItems.filter((cartItem) => {
          console.log(cartItem.productId.toString(), productId.toString());
          return cartItem.productId.toString() !== productId.toString();
        });
        console.log(updatedCartItems);
        const updatedCart = {
          items: updatedCartItems,
        };
        state.cart = updatedCart;
        console.log("UPDATED CART", state.cart);
      } else {
        console.log("UPDATING QUANTITY");
        updatedCartItems[cartProductIndex].quantity = newQuantity;
        const updatedCart = {
          items: updatedCartItems,
        };
        state.cart = updatedCart;
        console.log("UPDATED CART", state.cart);
      }

      if (state.isLoggedIn) {
        changeQuantityApi(productId, newQuantity)
          .then((res) => console.log(res))
          .catch((err) => console.log("COULD NOT UPDATE QUANTITY"));
      }
    },
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
      state = initialState;
      console.log("Customer not logged in");
    });
  },
});

export default customerSlice.reducer;

export const { changeQuantity, addProductToCart } = customerSlice.actions;
export const customerState = (state: RootState) => state.customer;
export const cartState = (state: RootState) => state.customer.cart.items;
