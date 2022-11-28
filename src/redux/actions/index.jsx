import { createAction } from "@reduxjs/toolkit";

export const fetchProducts = (request) => (dispatch) => {
  dispatch(fetchingProducts());
  request("http://localhost:3001/products")
    .then((products) => dispatch(fetchedProducts(products)))
    .catch(() => dispatch(fetchingProductsError()));
};

export const fetchingProducts = createAction("FETCHING_PRODUCTS");
export const fetchedProducts = createAction("FETCHED_PRODUCTS");
export const fetchingProductsError = createAction("FETCHING_PRODUCTS_ERROR");
