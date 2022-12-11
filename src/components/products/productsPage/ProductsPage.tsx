import React, { useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../../../utils/apiHelpers";
import { Product } from "../../../utils/types";
import ProductCard from "../productCard/ProductCard";
import ProductControlBoard from "../ProductControlBoard";
import ProductBanner from "./ProductBanner";
import { Outlet, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductsPage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const { category, productId } = useParams();

  const categories = {
    mice: true,
    "gaming-mice": true,
  };


  useEffect(() => {
    console.log(category! in categories);
    if (!productId) {
      setLoading(true);
      getAllProducts().then((data) => {
        console.log(data);
        const filtered = data.filter((data: any) => {
          console.log(data.category, category);
          console.log(category?.includes(data.category));
          return category?.includes(data.category);
        });
        console.log(filtered);
        setProducts(filtered);
        setLoading(false);
      });
    }
  }, [category]);

  return (
    <div>
      {productId ? (
        <Outlet />
      ) : (
        <>
          <ProductBanner category={category} />
          {loading ? (
            <p>Loading</p>
          ) : (
            <ProductControlBoard products={products} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
