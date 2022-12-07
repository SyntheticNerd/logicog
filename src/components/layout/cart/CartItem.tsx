import React from "react";
import { Product } from "../../../utils/types";
import { CartItemStyled } from "./CartItemStyled";
import Quantity from "./Quantity";
import { ReactComponent as Trash } from "../../../images/icons/trash.svg";
import { changeQuantity } from "../../../features/customer/customerSlice";
import { useAppDispatch } from "../../../features/store";

const CartItem = ({
  product,
}: {
  product: { product: Product; styleId: string; qty: number };
}) => {
  const style = product.product.styles.filter(
    (style) => style._id === product.styleId
  )[0];
  const dispatch = useAppDispatch();

  const deleteFromCartHandler = () => {
    dispatch(
      changeQuantity({ productId: product.product._id, newQuantity: 0 })
    );
  };

  return (
    <CartItemStyled>
      <img src={style.images[0]} alt={style.title} />
      <div className='right'>
        <div className='top' key={product.product.title}>
          <span>
            <strong>{product.product.title}</strong>
            <p>{style.title}</p>
          </span>
          <button onClick={deleteFromCartHandler}>
            <Trash />
          </button>
        </div>
        <div className='bottom'>
          <Quantity qty={product.qty} prodId={product.product._id} />
          <strong>
            {(parseFloat(product.product.price) * product.qty).toFixed(2)}
          </strong>
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
