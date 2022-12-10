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
  // const [productPg, setProductPg] = useState(true);
  const { category } = useParams();

  const categories = {
    mice: true,
    "gaming-mice": true,
  };

  console.log(category, category! in categories);
  const productPg = !(category! in categories);

  useEffect(() => {
    console.log(productPg);
    console.log(category! in categories);
    if (category && !productPg) {
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

  if (productPg) {
    return <div>true</div>;
  } else {
    return (
      <div>
        <ProductBanner category={category} />
        {loading ? <p>Loading</p> : <ProductControlBoard products={products} />}
      </div>
    );
  }
};

export default ProductsPage;
