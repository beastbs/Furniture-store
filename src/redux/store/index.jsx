import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/products";
import categoriesReducer from "../reducers/categories";

export const store = configureStore({
  reducer: { productsReducer, categoriesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
