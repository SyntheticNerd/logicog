import React from "react";
// import { changeQuantity } from "../../../utils/apiHelpers";
import { QuantityStyled } from "./CartItemStyled";
import { useAppDispatch } from "../../../features/store";
import { changeQuantity } from "../../../features/customer/customerSlice";

const Quantity = ({ prodId, qty }: { prodId: String; qty: number }) => {
  const dispatch = useAppDispatch();
  const increaseHandler = () => {
    dispatch(changeQuantity({ productId: prodId, newQuantity: qty + 1 }));
  };
  const decreaseHandler = () => {
    dispatch(changeQuantity({ productId: prodId, newQuantity: qty - 1 }));
  };
  return (
    <QuantityStyled>
      <button onClick={decreaseHandler}>
        <p>-</p>
      </button>
      <p>{qty}</p>
      <button onClick={increaseHandler}>
        <p>+</p>
      </button>
    </QuantityStyled>
  );
};

export default Quantity;
