import React, { useState, useEffect } from "react";
import { CartStyled } from "./CartStyled";
import { useAppSelector, useAppDispatch } from "../../../features/store";
import { cartOpen, closeCart } from "../../../features/ui/uiSlice";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as CheckMark } from "../../../images/icons/checkmark.svg";
import { cartState } from "../../../features/customer/customerSlice";
import { getProductById } from "../../../utils/apiHelpers";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";
import Loading from "../Loading";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const open = useAppSelector(cartOpen);
  const cart = useAppSelector(cartState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(closeCart(null));
  }, [dispatch]);

  useEffect(() => {
    setCartItems([]);
    setTotal(0);
    setLoading(true);
    const getProduct = async (item: any, index: number) => {
      const product = await getProductById(item.productInfo.productId);
      setTotal((prev) => prev + product.price * item.quantity);
      setCartItems((prev: any) => [
        ...prev,
        { product: product, qty: item.quantity, styleId: item.styleId },
      ]);
      if (index === cart.length - 1) {
        setLoading(false);
      }
    };
    cart.forEach((item, i) => {
      console.log(item);
      getProduct(item, i);
    });
    if (cart.length === 0) {
      setLoading(false);
    }
  }, [cart]);

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
            <div className='cartList'>
              {!loading &&
                cartItems.length > 0 &&
                //TODO change i to item title for production or remove strict mode
                cartItems.map((item: any) => <CartItem product={item} />)}
            </div>
            <div className='total'>
              {!loading && (
                <>
                  <p>
                    Item Subtotal: <span>(Not Including Tax or Shipping)</span>
                  </p>
                  <strong>${total.toFixed(2)}</strong>
                  <a href=''>ENTER PROMO CODE</a>
                </>
              )}
            </div>
            <div className='tosAgreement'>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>
                By checking this box, I agree to the{" "}
                <a href=''>Privacy Policy</a> and the{" "}
                <a href=''>Terms of Sales</a> of{" "}
                <a href=''>DR globalTech inc.</a>
              </label>
            </div>
            <button
              className='checkoutBtn'
              onClick={() => navigate("checkout")}
            >
              {loading ? (
                <Loading
                  height='40px'
                  width='40px'
                  color='var(--brand-color)'
                />
              ) : cart.length < 1 ? (
                "NO ITEMS IN CART"
              ) : (
                "CHECKOUT ►"
              )}
            </button>
          </motion.div>
        </AnimatePresence>
      </CartStyled>
    );
  }
  return <></>;
};

export default Cart;
