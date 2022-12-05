import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productStatus: "idle",
  orders: [],
  products: [],
  currentProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProducts: (state) => {
      state.products = "loading";
    },
    fetchedProducts: (state, action) => {
      state.products = action.payload;
      state.currentProducts = action.payload;
      state.productStatus = "idle";
    },
    fetchingProductsError: (state) => {
      state.products = "error";
    },
    addProductInCart: (state, action) => {
      state.orders.push(action.payload);
    },
    deleteProductFromCart: (state, action) => {
      state.orders = action.payload;
    },
    chooseCategories: (state, action) => {
      state.currentProducts = action.payload;
    },
  },
});

const { actions, reducer } = productsSlice;

export default reducer;
export const {
  fetchingProducts,
  fetchedProducts,
  fetchingProductsError,
  addProductInCart,
  deleteProductFromCart,
  chooseCategories,
} = actions;
