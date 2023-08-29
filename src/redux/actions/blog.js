import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG, GET_ALL_BLOG, } from "../type";

export const getAllBlogAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/blog/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_BLOG,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BLOG,
                    payload: error,
                });
            });
    };
};

export const addBlogAction = (addBlogData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/blog`, addBlogData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_BLOG,
                        payload: res.data,
                    });
                    dispatch(getAllBlogAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BLOG,
                    payload: error,
                });
            });
    };
};

export const updateBlogAction = (updateBlogData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/blog/update-blog/${updateBlogData._id}`, updateBlogData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_BLOG,
                        payload: res.data,
                    });
                    dispatch(getAllBlogAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_BLOG,
                    payload: error,
                });
            });
    };
};

export const deleteBlogAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/blog/delete-blog/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_BLOG,
                        payload: res.data,
                    });
                    dispatch(getAllBlogAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_BLOG,
                    payload: error,
                });
            });
    };
};
