import React, { useState, useEffect } from "react";
import { CartStyled } from "./CartStyled";
import { useAppSelector, useAppDispatch } from "../../../features/store";
import { cartOpen, closeCart } from "../../../features/ui/uiSlice";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as CheckMark } from "../../../images/icons/checkmark.svg";
import { cartState } from "../../../features/customer/customerSlice";
import { getProductBtId } from "../../../utils/apiHelpers";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any>([]);
  const open = useAppSelector(cartOpen);
  const cart = useAppSelector(cartState);

  useEffect(() => {
    const _cartItems = [];
    const getProduct = async (item: any) => {
      const product = await getProductBtId(item.productId);
      setCartItems((prev: any) => [...prev, product]);
    };
    cart.forEach((item) => {
      getProduct(item);
    });
  }, [cart]);

  useEffect(() => {
    console.log(cartItems);
  });

  const dispatch = useAppDispatch();

  if (open) {
    return (
      <CartStyled>
        <div className='backDrop' onClick={() => dispatch(closeCart(null))} />
        <AnimatePresence>
          <motion.div
            key='cart'
            initial={{ transform: "translateX(100%)" }}
            animate={{ transform: "translateX(0%)" }}
            exit={{ transform: "translateX(100%)" }}
            transition={{ type: "just" }}
            className='cart'
          >
            <div className='cartHead'>
              <h2>CART</h2>
              <button onClick={() => dispatch(closeCart(null))}></button>
            </div>
            <div className='notification'>
              <div className='graphic'>
                <CheckMark />
              </div>
              <p>Your order qualifies for Free shipping and Free returns</p>
            </div>
            {/* <div className="cartList">{cart.length > 0 && cart.map((item)=>)}</div> */}
          </motion.div>
        </AnimatePresence>
      </CartStyled>
    );
  }
  return <></>;
};

export default Cart;
