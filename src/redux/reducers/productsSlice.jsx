import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  productStatus: "idle",
  orders: [],
  products: [],
  currentProducts: [],
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/products");
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductInCart: (state, action) => {
      state.orders.push(action.payload);
    },
    deleteProductFromCart: (state, action) => {
      state.orders = action.payload;
    },
    chooseCategories: (state, action) => {
      state.currentProducts = action.payload;
    },
    filteredProducts: (state, action) => {
      state.currentProducts = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchProducts.pending, (state) => {
        state.products = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.currentProducts = action.payload;
        state.productStatus = "idle";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = productsSlice;

export default reducer;
export const {
  addProductInCart,
  deleteProductFromCart,
  chooseCategories,
  filteredProducts,
} = actions;
