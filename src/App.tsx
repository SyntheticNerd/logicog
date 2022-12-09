import { Outlet } from "react-router";
import Layout from "./components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, useAppDispatch } from "./features/store";

import {
  customerState,
  fetchCustomerThunk,
} from "./features/customer/customerSlice";
import { useEffect } from "react";



function App() {
  const customer = useSelector(customerState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const sid = localStorage.getItem("sid");
    if (sid && !customer.isLoggedIn) {
      dispatch(fetchCustomerThunk());
      console.log(customer);
    }
  }, [customer, dispatch]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
