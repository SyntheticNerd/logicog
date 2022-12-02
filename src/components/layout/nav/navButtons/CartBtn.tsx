import { ReactComponent as CartImg } from "../../../../images/icons/cart.svg";
import { CartBtnStyled } from "./ButtonsStyled";
import { useSelector } from "react-redux";
import { customerState } from "../../../../features/customer/customerSlice";
import { useEffect, useState } from "react";
import { toggleCart } from "../../../../features/ui/uiSlice";
import { useAppDispatch } from "../../../../features/store";

const CartBtn = () => {
  const [itemCount, setItemCount] = useState(0);
  const { cart } = useSelector(customerState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let counter = 0;
    cart.items.forEach((item) => (counter += item.quantity));
    setItemCount(counter);
  }, [cart]);
  return (
    <CartBtnStyled onClick={() => dispatch(toggleCart(null))}>
      {itemCount > 0 && <span>{itemCount}</span>}
      <CartImg />
    </CartBtnStyled>
  );
};

export default CartBtn;
