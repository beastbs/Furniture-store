import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";

import "./ProductList.scss";

const ProductList = () => {
  const { products } = useSelector((state) => state.productsReducer);

  return (
    <main>
      {products.map(({ id, ...other }) => (
        <ProductItem key={id} {...other} />
      ))}
    </main>
  );
};

export default ProductList;
