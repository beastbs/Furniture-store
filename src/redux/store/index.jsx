import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/products";

export const store = configureStore({
  reducer: { productsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
