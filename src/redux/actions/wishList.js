import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import {
  ADD_WISHLIST,
  UPDATE_WISHLIST,
  DELETE_WISHLIST,
  GET_ALL_WISHLIST,
} from "../type";

export const getAllWishListAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/wishlist/get/all`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_WISHLIST,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_WISHLIST,
          payload: error,
        });
      });
  };
};

export const addWishListAction = (addWishListData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/wishlist`, addWishListData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_WISHLIST,
            payload: res.data,
          });
          dispatch(getAllWishListAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_WISHLIST,
          payload: error,
        });
      });
  };
};

export const deleteWishListAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/wishlist/delete/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_WISHLIST,
            payload: res.data,
          });
          dispatch(getAllWishListAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_WISHLIST,
          payload: error,
        });
      });
  };
};
