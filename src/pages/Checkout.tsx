import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../features/store";

import { cartState, checkout } from "../features/customer/customerSlice";
import { getProductBtId } from "../utils/apiHelpers";
import { Link } from "react-router-dom";
import { CheckoutStyled } from "./CheckoutStyled";
import CheckoutForm from "../components/checkout/checkoutForm/CheckoutForm";
import CheckoutSummary from "../components/checkout/checkoutSummary/CheckoutSummary";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const cart = useAppSelector(cartState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCartItems([]);
    setTotal(0);
    const getProduct = async (item: any) => {
      const product = await getProductBtId(item.productId);
      setTotal((prev) => prev + product.price * item.quantity);
      setCartItems((prev: any) => [
        ...prev,
        { product: product, qty: item.quantity, styleId: item.styleId },
      ]);
    };
    cart.forEach((item) => {
      getProduct(item);
    });
  }, [cart]);

  return (
    <CheckoutStyled>
      <div className='topBar'>
        <Link to='/'>Topbar</Link>
      </div>
      <div className='banner'>
        <h1>CHECKOUT</h1>
        <p>
          <Link to='sign-in'>Sign in</Link> or{" "}
          <Link to='sign-up'>create a new account</Link> to track orders and see
          items you may have added using another device.
        </p>
      </div>
      <main className='contentWrapper'>
        <CheckoutForm />
        <CheckoutSummary cartItems={cartItems} total={total} tax={total * 0.0725}/>
      </main>
    </CheckoutStyled>
  );
};

export default Checkout;