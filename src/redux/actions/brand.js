import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_BRAND, UPDATE_BRAND, DELETE_BRAND, GET_ALL_BRAND, } from "../type";

export const getAllBrandAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/brand/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_BRAND,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BRAND,
                    payload: error,
                });
            });
    };
};

export const addBrandAction = (addBrandData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/brand`, addBrandData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_BRAND,
                        payload: res.data,
                    });
                    dispatch(getAllBrandAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BRAND,
                    payload: error,
                });
            });
    };
};

export const updateBrandAction = (updateBrandData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/brand/update-brand/${updateBrandData._id}`, updateBrandData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_BRAND,
                        payload: res.data,
                    });
                    dispatch(getAllBrandAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_BRAND,
                    payload: error,
                });
            });
    };
};

export const deleteBrandAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/brand/delete-brand/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_BRAND,
                        payload: res.data,
                    });
                    dispatch(getAllBrandAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_BRAND,
                    payload: error,
                });
            });
    };
};
