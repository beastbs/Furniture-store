const initialState = {
  productStatus: "idle",
  orders: [],
  products: [],
  currentProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_PRODUCTS":
      return {
        ...state,
        productStatus: "loading",
      };
    case "FETCHED_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        currentProducts: action.payload,
        productStatus: "idle",
      };
    case "FETCHING_PRODUCTS_ERROR":
      return {
        ...state,
        productStatus: "error",
      };
    case "ADD_PRODUCT_IN_CART":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "DELETE_PRODUCT_FROM_CART":
      return {
        ...state,
        orders: [...action.payload],
      };
    case "CHOOSE_CATEGORIES":
      return {
        ...state,
        currentProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
