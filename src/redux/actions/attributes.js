import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE, GET_ALL_ATTRIBUTE, } from "../type";

export const getallAttributeAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/attributes/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_ATTRIBUTE,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_ATTRIBUTE,
                    payload: error,
                });
            });
    };
};

export const addAttributeAction = (addAttributeData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/attributes`, addAttributeData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_ATTRIBUTE,
                        payload: res.data,
                    });
                    dispatch(getallAttributeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_ATTRIBUTE,
                    payload: error,
                });
            });
    };
};

export const updateAttributeAction = (updateAttributeData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/attributes/update-attributes/${updateAttributeData.id}`, updateAttributeData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_ATTRIBUTE,
                        payload: res.data,
                    });
                    dispatch(getallAttributeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_ATTRIBUTE,
                    payload: error,
                });
            });
    };
};

export const deleteAttributeAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/attributes/delete-attributes/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_ATTRIBUTE,
                        payload: res.data,
                    });
                    dispatch(getallAttributeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_ATTRIBUTE,
                    payload: error,
                });
            });
    };
};
