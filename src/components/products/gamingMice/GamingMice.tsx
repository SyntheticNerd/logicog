import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../utils/apiHelpers";
import { Product } from "../../../utils/types";
import ProductCard from "../productCard/ProductCard";
import ProductControlBoard from "../ProductControlBoard";
import GMBanner from "./GMBanner";

const GamingMice = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((data) => {
      setProducts(data);
      console.log(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <GMBanner />
      {loading ? (
        <p>Loading</p>
      ) : (
        <ProductControlBoard products={products}/>
      )}
    </div>
  );
};

export default GamingMice;
