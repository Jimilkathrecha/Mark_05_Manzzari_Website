import {
  ADD_WISHLIST,
  UPDATE_WISHLIST,
  DELETE_WISHLIST,
  GET_ALL_WISHLIST,
  RESET_GLOBAL_STATE,
} from "../type";

const initialState = {
  getAllWishListData: [],
  addWishListData: [],
  updateWishListDatat: [],
  deleteWishListData: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WISHLIST:
      return {
        ...state,
        getAllWishListData: action.payload,
      };
    case ADD_WISHLIST:
      return {
        ...state,
        addWishListData: action.payload,
      };
    case UPDATE_WISHLIST:
      return {
        ...state,
        updateWishListDatat: action.payload,
      };
    case DELETE_WISHLIST:
      return {
        ...state,
        deleteWishListData: action.payload,
      };

    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default wishListReducer;
