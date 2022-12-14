import React, { useState } from "react";
import { Product } from "../../../utils/types";
import { ProductCardStyled } from "./ProductCardStyled";
import { ReactComponent as CartIcon } from "../../../images/icons/cart.svg";
import { addProductToCart } from "../../../features/customer/customerSlice";
import { useAppDispatch } from "../../../features/store";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}
//TODO Add series to product
const ProductCard = ({ product }: Props) => {
  const [style, setStyle] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  return (
    <ProductCardStyled
    // to={`/products/${product.category}/${product._id}`}
    // onClick={() =>
    //   navigate(`/products/${product.category}/${product._id}/${style}`)
    // }
    >
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
          {product.styles[style].quantity > 0 ? (
            <button key={product._id.toString()} onClick={addToCartHandler}>
              <CartIcon /> ADD TO CART
            </button>
          ) : (
            <h3>SOLD OUT TEMPORARILY</h3>
          )}
        </div>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
