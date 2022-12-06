import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../utils/apiHelpers";
import { Product } from "../../../utils/types";
import ProductCard from "../productCard/ProductCard";
import ProductControlBoard from "../ProductControlBoard";
import ProductBanner from "./ProductBanner";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useParams();

  useEffect(() => {
    console.log(category);
    setLoading(true);
    getAllProducts().then((data) => {
      setProducts(data);
      // console.log(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <ProductBanner category={category} />
      {loading ? <p>Loading</p> : <ProductControlBoard products={products} />}
    </div>
  );
};

export default ProductsPage;
