import { configureStore } from "@reduxjs/toolkit";

import categories from "../reducers/categoriesSlice";
import products from "../reducers/productsSlice";

export const store = configureStore({
  reducer: { products, categories },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
