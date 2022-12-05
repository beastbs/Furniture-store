import {
  fetchingProducts,
  fetchedProducts,
  fetchingProductsError,
} from "../reducers/productsSlice";
import { fetchedCategories } from "../reducers/categoriesSlice";

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
