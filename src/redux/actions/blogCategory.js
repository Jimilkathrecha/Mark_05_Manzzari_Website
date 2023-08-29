import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_BLOGCATEGORY, UPDATE_BLOGCATEGORY, DELETE_BLOGCATEGORY, GET_ALL_BLOGCATEGORY, } from "../type";

export const getAllBlogCategoryAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/blogCategory/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_BLOGCATEGORY,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BLOGCATEGORY,
                    payload: error,
                });
            });
    };
};

export const addBlogCategoryAction = (addBlogCategoryData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/blogCategory`, addBlogCategoryData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_BLOGCATEGORY,
                        payload: res.data,
                    });
                    dispatch(getAllBlogCategoryAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BLOGCATEGORY,
                    payload: error,
                });
            });
    };
};

export const updateBlogCategoryAction = (updateBlogCategoryData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/blogCategory/update-blogCategory/${updateBlogCategoryData._id}`, updateBlogCategoryData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_BLOGCATEGORY,
                        payload: res.data,
                    });
                    dispatch(getAllBlogCategoryAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_BLOGCATEGORY,
                    payload: error,
                });
            });
    };
};

export const deleteBlogCategoryAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/blogCategory/delete-blogCategory/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_BLOGCATEGORY,
                        payload: res.data,
                    });
                    dispatch(getAllBlogCategoryAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_BLOGCATEGORY,
                    payload: error,
                });
            });
    };
};
