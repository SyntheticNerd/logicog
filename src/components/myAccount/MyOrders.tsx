import React from "react";
import { useAppSelector, useAppDispatch } from "../../features/store";

import {
  customerState,
  refundTransaction,
} from "../../features/customer/customerSlice";
import { Link } from "react-router-dom";
import { MyOrdersStyled } from "./MyOrdersStyled";

type Props = {};
const MyOrders = (props: Props) => {
  const customer = useAppSelector(customerState);
  const dispatch = useAppDispatch();
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
    <MyOrdersStyled>
      {customer.transactions.length > 0 ? (
        customer.transactions.map((transaction: any) => (
          <div className='transactionSummary'>
            <h4>Transaction Number: {transaction._id}</h4>
            <b>Items</b>
            <ul>
              {transaction.items.map((item: any) => (
                <li>
                  <img src={item.productInfo.productImage} alt='' />
                  <b>{item.quantity}</b>
                  <p>{item.productInfo.productName}</p>
                </li>
              ))}
            </ul>
            <p className='transactionDate'>
              <b>Date of transaction:</b>{" "}
              {new Date(transaction.date).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <b>Total: {transaction.total.toFixed(2)}</b>
            {transaction.refunded ? (
              <div className='refunded'>REFUNDED</div>
            ) : (
              <button
                className='returnReq'
                onClick={() => dispatch(refundTransaction(transaction._id))}
              >
                START RETURN
              </button>
            )}
          </div>
        ))
      ) : (
        <h4>
          You do not have any transactions associated with this account.{" "}
          <Link to='/'>Start Shopping</Link>
        </h4>
      )}
    </MyOrdersStyled>
  );
};

export default MyOrders;
