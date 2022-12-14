import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProductById } from "../../../utils/apiHelpers";
import { Product } from "../../../utils/types";
import { ProductDetailsStyled } from "./ProductDetailsStyled";

import { ReactComponent as Cart } from "../../../images/icons/cart.svg";
import { useAppDispatch } from "../../../features/store";
import { addProductToCart } from "../../../features/customer/customerSlice";
import Loading from "../../layout/Loading";

const bgColors: { [key: string]: string } = {
  "gaming-mice": "#251462",
  "gaming-mouse-pads": "#7c7c7c",
  "gaming-keyboards": "#5b7e61",
};

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const { category, productId, style } = useParams();
  const [styleSelected, setStyleSelected] = useState<number>(
    style ? parseFloat(style) : 0
  );
  const [slideNum, setSlideNum] = useState(0);

  const [openSpecs, setOpenSpecs] = useState(false);
  const [openSysReq, setOpenSysReq] = useState(false);
  const [openInBox, setOpenInBox] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  const sliderRef = useRef(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      setLoading(true);
      getProductById(productId)
        .then((data) => {
          console.log(data);
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [productId]);

  const addToCartHandler = (e: React.MouseEvent<HTMLElement>) => {
    console.log("TEST");
    dispatch(
      addProductToCart({
        productInfo: {
          productId: product!._id,
          productName: product!.title,
          productImage: product!.styles[styleSelected].images[0],
        },
        styleId: product!.styles[styleSelected]._id,
      })
    );
    e.stopPropagation();
  };

  return (
    <ProductDetailsStyled
      style={{
        backgroundColor: product
          ? `${bgColors[product!.category]}`
          : bgColors[category!]
          ? `${bgColors[category!]}`
          : `#3b3b3b`,
      }}
    >
      {product && !loading ? (
        <div className='contentWrapper'>
          <p className='currentRoute'>
            <Link to='/products'>products</Link>/
            <Link to={`/products/${product!.category}`}>
              {product!.category}
            </Link>
            /
            <Link to={`/products/${product!.category}/${productId}`}>
              {productId}
            </Link>
          </p>
          <div className='mainContent'>
            <div className='slideShow'>
              <Slider
                arrows={false}
                ref={sliderRef}
                afterChange={(current) => setSlideNum(current)}
              >
                {product.styles[styleSelected].images.map((image) => (
                  <div className='slideWrapper'>
                    <img src={image} alt={product.title} />
                  </div>
                ))}
              </Slider>
              <div className='slideNav'>
                {product.styles[styleSelected].images.map((image, i) => (
                  <button
                    onClick={() => {
                      // @ts-expect-error
                      sliderRef!.current!.slickGoTo(i);
                      setSlideNum(i);
                    }}
                    className={slideNum === i ? "currentSlide" : ""}
                  >
                    <img src={image} alt={product.title} />
                  </button>
                ))}
              </div>
            </div>
            <div className='productInfo'>
              <strong className='series'>{product.series}</strong>
              <h2 className='title'>{product.title}</h2>
              <p className='price'>${product.price}</p>
              {product.styles.length > 1 && (
                <div className='styles'>
                  {product.styles.map((style, i) => (
                    <button
                      style={{
                        backgroundColor: style.color,
                        outline:
                          styleSelected === i
                            ? "3px solid white"
                            : "1px solid white",
                      }}
                      onClick={() => setStyleSelected(i)}
                    />
                  ))}
                </div>
              )}
              {product.styles[styleSelected].quantity > 0 ? (
                <>
                  <h4 className='inStock'>In stock. Ready to ship</h4>
                  <button className='addToCart' onClick={addToCartHandler}>
                    <Cart /> ADD TO CART
                  </button>
                </>
              ) : (
                <h4 className='soldOut'>Sold Out Temporarily</h4>
              )}
              <p className='description'>{product.description}</p>
              <div className='dropDown'>
                <button
                  className={`dropDownBtn ${openSpecs ? "open" : ""}`}
                  onClick={() => setOpenSpecs((old) => !old)}
                >
                  SPECS & DETAILS
                </button>
                <div
                  className={`dropDownContainer ${openSpecs && "dropDownOpen"}`}
                >
                  <h3>DIMENSIONS</h3>
                  {product.primarySpecs.length > 0 && (
                    <ul>
                      <h4>PRIMARY SPECIFICATIONS</h4>
                      {product.primarySpecs.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <ul>
                    <h4>PHYSICAL SPECIFICATIONS</h4>
                    {product.weight && <li>Weight: {product.weight} grams.</li>}
                    {product.height && <li>Height: {product.height} in.</li>}
                    {product.width && <li>Width: {product.width} in.</li>}
                    {product.depth && <li>Depth: {product.depth} in.</li>}
                  </ul>
                  {product.technicalSpecs.length > 0 && (
                    <ul>
                      <h4>TECHNICAL SPECIFICATIONS</h4>
                      {product.technicalSpecs.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {product.tracking.length > 0 && (
                    <ul>
                      <h4>TRACKING</h4>
                      {product.tracking.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {product.warranty && (
                    <ul>
                      <h4>WARRANT INFORMATION</h4>
                      {product.warranty}
                    </ul>
                  )}
                </div>
              </div>
              {product.requirements.length > 0 && (
                <div className='dropDown'>
                  <button
                    className={`dropDownBtn ${openSysReq ? "open" : ""}`}
                    onClick={() => setOpenSysReq((old) => !old)}
                  >
                    SYSTEM REQUIREMENTS
                  </button>
                  <div
                    className={`dropDownContainer ${
                      openSysReq && "dropDownOpen"
                    }`}
                  >
                    <ul>
                      <h4>REQUIREMENTS</h4>
                      {product.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <div className='dropDown'>
                <button
                  className={`dropDownBtn ${openInBox ? "open" : ""}`}
                  onClick={() => setOpenInBox((old) => !old)}
                >
                  IN THE BOX
                </button>
                <div
                  className={`dropDownContainer ${openInBox && "dropDownOpen"}`}
                >
                  <ul>
                    {product.inBox.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='dropDown'>
                <button
                  className={`dropDownBtn ${openSupport ? "open" : ""}`}
                  onClick={() => setOpenSupport((old) => !old)}
                >
                  SUPPORT
                </button>
                <div
                  className={`dropDownContainer ${
                    openSupport && "dropDownOpen"
                  }`}
                >
                  <ul>
                    <li>
                      <Link to=''>GET STARTED</Link>
                    </li>
                    <li>
                      <Link to=''>REGISTER A PRODUCT</Link>
                    </li>

                    <li>
                      <Link to=''>VIEW FAQS</Link>
                    </li>
                    <li>
                      <Link to=''>VIEW ALL DOWNLOADS</Link>
                    </li>
                    <li>
                      <Link to=''>FILE A WARRANTY CLAIM</Link>
                    </li>
                    <li>
                      <Link to=''>REQUEST SUPPORT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
        <div className='loadingWrapper'>
          <Loading color='var(--brand-color)' />
        </div>
      ) : (
        <div>No Product</div>
      )}
    </ProductDetailsStyled>
  );
};

export default ProductDetails;
