import { createAction } from "@reduxjs/toolkit";

export const fetchProducts = (request) => (dispatch) => {
  dispatch(fetchingProducts());
  request("http://localhost:3001/products")
    .then((products) => dispatch(fetchedProducts(products)))
    .catch(() => dispatch(fetchingProductsError()));
};

export const fetchCategories = (request) => (dispatch) => {
  request("http://localhost:3001/categories")
    .then((categories) => dispatch(fetchedCategories(categories)))
    .catch((e) => console.log(e));
};

export const fetchingProducts = createAction("FETCHING_PRODUCTS");
export const fetchedProducts = createAction("FETCHED_PRODUCTS");
export const fetchingProductsError = createAction("FETCHING_PRODUCTS_ERROR");

export const addProductInCart = createAction("ADD_PRODUCT_IN_CART");
export const deleteProductFromCart = createAction("DELETE_PRODUCT_FROM_CART");

export const fetchedCategories = createAction("FETCHED_CATEGORIES");
export const chooseCategories = createAction("CHOOSE_CATEGORIES");
