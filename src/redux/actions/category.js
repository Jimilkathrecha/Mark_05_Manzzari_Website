import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, } from "../type";

export const getAllCategoryAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/category/get/all`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_CATEGORY,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CATEGORY,
          payload: error,
        });
      });
  };
};

export const addCategoryAction = (addCategoryData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/category`, addCategoryData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_CATEGORY,
            payload: res.data,
          });
          dispatch(getAllCategoryAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_CATEGORY,
          payload: error,
        });
      });
  };
};

export const updateCategoryAction = (updateCategoryData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/category/update-category/${updateCategoryData._id}` , updateCategoryData
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_CATEGORY,
            payload: res.data,
          });
          dispatch(getAllCategoryAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: error,
        });
      });
  };
};

export const deleteCategoryAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/category/delete/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_CATEGORY,
            payload: res.data,
          });
          dispatch(getAllCategoryAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: error,
        });
      });
  };
};
