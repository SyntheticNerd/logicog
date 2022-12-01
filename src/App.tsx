import { Outlet } from "react-router";
import Layout from "./components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./features/store";

import {
  customerState,
  fetchCustomer,
} from "./features/customer/customerSlice";
import { useEffect } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;

function App() {
  const customer = useSelector(customerState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCustomer());
    console.log(customer);
  }, [customer, dispatch]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
