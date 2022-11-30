const initialState = {
  categoriesStatus: "idle",
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
