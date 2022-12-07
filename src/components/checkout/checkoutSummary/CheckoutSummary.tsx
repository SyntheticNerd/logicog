import React from "react";
import { Link } from "react-router-dom";
import { Product, Style } from "../../../utils/types";
import {
  CheckoutSummaryStyled,
  SummaryItemStyled,
} from "./CheckoutSummaryStyled";

interface Props {
  cartItems: { product: Product; styleId: string; qty: number }[];
  total: number;
  tax: number;
  shipping?: number;
}

const SummaryItem = ({ cartItem }: { cartItem: any }) => {
  const style = cartItem.product.styles.filter(
    (style: Style) => style._id === cartItem.styleId
  )[0];

  return (
    <SummaryItemStyled>
      <div className='left'>
        <p className='quantity'>{cartItem.qty}</p>
        <img src={style.images[0]} alt={style.title} />
      </div>
      <div className='right'>
        <h3>
          {cartItem.product.title} - {style.title}
        </h3>
        <p>{style.color}</p>
        {style.quantity > 0 ? (
          <p className='inStock'>In Stock</p>
        ) : (
          <p className='outOfStock'>Out of Stock</p>
        )}
        <strong className='price'>
          ${(cartItem.product.price * cartItem.qty).toFixed(2)}
        </strong>
      </div>
    </SummaryItemStyled>
  );
};

const CheckoutSummary = ({ cartItems, total, tax, shipping }: Props) => {
  return (
    <CheckoutSummaryStyled>
      <div className='summary'>
        <div className='summaryTitle'>
          <h2>SUMMARY</h2> <Link to='cart'>Edit</Link>
        </div>
        <ul className='itemList'>
          {cartItems.map((item) => (
            <SummaryItem cartItem={item} key={item.product.title} />
          ))}
        </ul>
        <div className='totals'>
          <div>
            <h4>Subtotal</h4> <p>${total.toFixed(2)}</p>
          </div>
          <div>
            <h4>Estimated Shipping</h4>
            <p>{shipping ? `$${shipping.toFixed(2)}` : "Free"}</p>
          </div>
          <div>
            <h4>Estimated Tax</h4>
            <p>${tax.toFixed(2)}</p>
          </div>
        </div>
        <div className='total'>
          <h4>Total</h4>
          <strong>
            ${(total + tax + (shipping ? shipping : 0)).toFixed(2)}
          </strong>
        </div>
      </div>
      <div className='banner'>
        <div className='bannerBox'>
          <img
            src={require("../../../images/icons/money-back.png")}
            alt='Shield'
          />
          <div>
            <strong>Money-back Guarantee</strong>
            <p>With easy return</p>
          </div>
        </div>
        <div className='bannerBox lock'>
          <img
            src={require("../../../images/icons/secure-checkout.png")}
            alt='Lock'
          />
          <div>
            <strong>Secure Checkout</strong>
            <p>Shopping is always safe and secure</p>
          </div>
        </div>
      </div>
    </CheckoutSummaryStyled>
  );
};

export default CheckoutSummary;
