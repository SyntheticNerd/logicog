import React from "react";
import { useAppSelector } from "../../features/store";

import { customerState } from "../../features/customer/customerSlice";
import { Link } from "react-router-dom";

type Props = {};
const MyOrders = (props: Props) => {
  const customer = useAppSelector(customerState);
  if (!customer.isLoggedIn) {
    return (
      <h3>
        Guest order is currently not available please{" "}
        <Link to='/login'>Login</Link> or{" "}
        <Link to='/create-account'>Create an Account</Link>
      </h3>
    );
  }
  return (
    <div>
      {customer.transactions.map((transaction) => (
        <div>
          <h4>Transaction Number: {transaction._id}</h4>
          <p>Date of transaction: {transaction.date}</p>
          <b>Total: {transaction.total}</b>

          {/* {JSON.stringify(transaction)} */}
          <ul>
            {transaction.items.map((item: any) => (
              <li>
                <img src={item.productInfo.productImage} alt='' />
                <p>{item.productInfo.productName}</p>
                <b>{item.quantity}</b>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
