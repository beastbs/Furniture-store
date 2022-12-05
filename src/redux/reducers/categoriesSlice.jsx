import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesStatus: "idle",
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchedCategories: (store, action) => {
      store.categories = action.payload;
    },
  },
});

const { actions, reducer } = categoriesSlice;

export default reducer;
export const { fetchedCategories } = actions;
