import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToCartApi,
  changeQuantityApi,
  checkoutApi,
  logoutApi,
} from "../../utils/apiHelpers";
import { RootState } from "../store";

interface CustomerState {
  firstName: String;
  lastName: String;
  email: String;
  cart: {
    items: { productInfo: any; styleId: any; quantity: number; _id?: any }[];
  };
  transactions: any[];
  isLoggedIn: Boolean;
}

const initialState: CustomerState = {
  firstName: "",
  lastName: "",
  email: "",
  cart: { items: [] },
  transactions: [],
  isLoggedIn: false,
};

const mergeCarts = (cartA: any[], cartB: any[]) => {
  const arr = [...cartA, ...cartB];
  const result = Object.values(
    arr.reduce((a, curr) => {
      if (!a[curr.productInfo.productId]) {
        a[curr.productInfo.productId] = Object.assign({}, curr);
      } else {
        a[curr.productInfo.productId].quantity += curr.quantity;
      }
      return a;
    }, {})
  );
  // console.log(result);
  return result;
};

const fetchCustomer = async () => {
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
};

export const fetchCustomerThunk = createAsyncThunk(
  "customers/fetchCustomer",
  async () => {
    console.log("executing async thunk");
    return await fetchCustomer();
  }
);

export const checkoutThunk = createAsyncThunk(
  "customer/checkout",
  async (total: number, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const logged = state.customer.isLoggedIn;
    console.log("In checkout", total, logged);
    if (logged) {
      try {
        const result = await checkoutApi(total);
        console.log(result);
        return await fetchCustomer();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(
        "Perhaps we will add guest checkout could also redirect to login or signup"
      );
    }
  }
);

//TODO if cart has items and customer logs in merge cart items
export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      logoutApi();
      localStorage.removeItem("sid");
      return initialState;
    },
    addProductToCart: (state, action) => {
      const { productInfo, styleId } = action.payload;

      const cartProductIndex = state.cart.items.findIndex((cp) => {
        return cp.productInfo.productId.toString() === productInfo.productId.toString();
      });

      let newQuantity = 1;
      const updatedCartItems = [...state.cart.items];
      if (cartProductIndex >= 0) {
        newQuantity = state.cart.items[cartProductIndex].quantity + 1;
        updatedCartItems[cartProductIndex].quantity = newQuantity;
      } else {
        updatedCartItems.push({
          productInfo: productInfo,
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
        addProductToCartApi(productInfo, styleId)
          .then((res) => console.log(res))
          .catch((err) => console.log("ERROR", err));
      }
    },
    changeQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      console.log(productId, newQuantity);
      //find item in cart
      const cartProductIndex = state.cart.items.findIndex((cp) => {
        return cp.productInfo.productId.toString() === productId.toString();
      });

      console.log(cartProductIndex);

      let updatedCartItems = [...state.cart.items];
      if (cartProductIndex === undefined || cartProductIndex === null) {
        console.log("PRODUCT DOES NOT EXIST IN CART");
      } else if (newQuantity <= 0) {
        //filter out items that are not the item with 0 quantity
        console.log("DELETEING");
        updatedCartItems = updatedCartItems.filter((cartItem) => {
          console.log(cartItem.productInfo.productId.toString(), productId.toString());
          return cartItem.productInfo.productId.toString() !== productId.toString();
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
    builder.addCase(fetchCustomerThunk.fulfilled, (state, action) => {
      let copy = action.payload;
      copy.isLoggedIn = true;
      copy.cart.items = mergeCarts(state.cart.items, copy.cart.items);
      console.log("Success", copy);
      return copy;
    });
    builder.addCase(fetchCustomerThunk.pending, (state, action) => {
      console.log("PENDING");
    });
    builder.addCase(fetchCustomerThunk.rejected, (state, action) => {
      state = initialState;
      console.log("Customer not logged in");
    });
    builder.addCase(checkoutThunk.fulfilled, (state, action) => {
      let copy = action.payload;
      console.log("Success", copy);
      return copy;
    });
    builder.addCase(checkoutThunk.pending, (state, action) => {
      console.log("PENDING");
    });
    builder.addCase(checkoutThunk.rejected, (state, action) => {
      state = initialState;
      console.log("Customer not logged in");
    });
  },
});

export default customerSlice.reducer;

export const { changeQuantity, addProductToCart, logout } =
  customerSlice.actions;
export const customerState = (state: RootState) => state.customer;
export const cartState = (state: RootState) => state.customer.cart.items;
export const isLoggedInState = (state: RootState) => state.customer.isLoggedIn;
