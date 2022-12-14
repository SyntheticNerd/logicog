import React from "react";
import { useAppSelector, useAppDispatch } from "../../features/store";
import {
  wishListState,
  addProductToCart,
  removeProductFromWishList,
} from "../../features/customer/customerSlice";
import { Link } from "react-router-dom";
import { WishListStyled } from "./WishListStyled";
const WishList = () => {
  const wishList = useAppSelector(wishListState);
  const dispatch = useAppDispatch();
  return (
    <WishListStyled>
      <h2>WISHLIST</h2>
      <ul className='wishList'>
        {wishList.map((item) => (
          <li className='wishItem'>
            <Link to={`/products/_/${item.productInfo.productId}`}>
              <img
                src={item.productInfo.productImage}
                alt={item.productInfo.productName}
              />
              <b>{item.productInfo.productName}</b>
            </Link>
            <div>
              <button
                className='remove'
                onClick={() =>
                  dispatch(
                    removeProductFromWishList(item.productInfo.productId)
                  )
                }
              >
                Remove
              </button>
              <button
                className='add'
                onClick={() =>
                  dispatch(
                    addProductToCart({
                      productInfo: item.productInfo,
                      styleId: item.styleId,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </WishListStyled>
  );
};

export default WishList;
