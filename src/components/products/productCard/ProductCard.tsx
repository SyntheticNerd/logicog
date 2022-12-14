import React, { useState, useEffect } from "react";
import { Product } from "../../../utils/types";
import { ProductCardStyled } from "./ProductCardStyled";
import { ReactComponent as CartIcon } from "../../../images/icons/cart.svg";
import {
  addProductToCart,
  addProductToWishList,
  removeProductFromWishList,
  wishListState,
} from "../../../features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "../../../features/store";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../../images/icons/heart.svg";

interface Props {
  product: Product;
}
//TODO Add series to product
const ProductCard = ({ product }: Props) => {
  const [style, setStyle] = useState(0);
  const [wishActive, setWishActive] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const wishList = useAppSelector(wishListState);

  const addToCartHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(
      addProductToCart({
        productInfo: {
          productId: product._id,
          productName: product.title,
          productImage: product.styles[style].images[0],
        },
        styleId: product.styles[style]._id,
      })
    );
  };

  const addToWishListHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (wishActive) {
      dispatch(removeProductFromWishList(product._id));
    } else {
      dispatch(
        addProductToWishList({
          productInfo: {
            productId: product._id,
            productName: product.title,
            productImage: product.styles[style].images[0],
          },
          styleId: product.styles[style]._id,
        })
      );
    }
  };

  useEffect(() => {
    if (
      wishList.findIndex((item) => item.productInfo.productId === product._id) >
      -1
    ) {
      setWishActive(true);
    } else {
      setWishActive(false);
    }
  }, [wishList]);

  return (
    <ProductCardStyled>
      <Link
        to={`/products/${product.category}/${product._id}`}
        className='imageWrapper'
      >
        <img src={product.styles[style].images[0]} alt={product.title} />
      </Link>
      <div className='contentWrapper'>
        <strong>{product.series.toUpperCase()}</strong>
        <div>
          <Link to={`/products/${product.category}/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          {product.styles.length > 1 ? (
            product.styles[0].color ? (
              <div className='styleSelection'>
                {product.styles.map((_style, i) => (
                  <button
                    key={_style._id.toString()}
                    style={{
                      backgroundColor: _style.color,
                      borderWidth: style === i ? "3px" : "2px",
                    }}
                    onClick={(e) => {
                      setStyle(i);
                      e.stopPropagation();
                    }}
                  />
                ))}
              </div>
            ) : (
              // does not have colors
              <div></div>
            )
          ) : (
            // only has one style
            <div></div>
          )}
          <b>${product.price}</b>
          <div className='buttonWrapper'>
            {product.styles[style].quantity > 0 ? (
              <button key={product._id.toString()} onClick={addToCartHandler}>
                <CartIcon /> ADD TO CART
              </button>
            ) : (
              <h3>SOLD OUT TEMPORARILY</h3>
            )}
            <button
              className={`wishListBtn ${wishActive && "wishListBtnActive"}`}
              onClick={addToWishListHandler}
            >
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
