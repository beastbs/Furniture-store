import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  categoriesStatus: "idle",
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  () => {
    const { request } = useHttp();
    return request("http://localhost:3001/categories");
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchedCategories: (store, action) => {
      store.categories = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = categoriesSlice;

export default reducer;
export const { fetchedCategories } = actions;
