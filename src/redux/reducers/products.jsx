const initialState = {
	productStatus: "idle",
	products: [],
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
			productStatus: "idle",
		 };
	  case "FETCHING_PRODUCTS_ERROR":
		 return {
			...state,
			productStatus: "error",
		 };
	  default:
		 return state;
	}
 };
 
 export default productsReducer;
 