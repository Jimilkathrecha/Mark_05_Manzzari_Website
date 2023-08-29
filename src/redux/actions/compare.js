import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_COMPAER, UPDATE_COMPAER, DELETE_COMPAER, GET_ALL_COMPAER, } from "../type";

export const getAllCompareDataAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/compareItem/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_COMPAER,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_COMPAER,
                    payload: error,
                });
            });
    };
};

export const addCompareDataAction = (addCartData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/compareItem/`, addCartData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_COMPAER,
                        payload: res.data,
                    });
                    dispatch(getAllCompareDataAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_COMPAER,
                    payload: error,
                });
            });
    };
};

// export const updateCartAction = (updateCartData) => {
//     return (dispatch) => {
//         return ApiPut(`/api/v1/blogCategory/update-blogCategory/${updateCartData._id}`, updateCartData)
//             .then((res) => {
//                 if (res?.status === 200) {
//                     dispatch({
//                         type: UPDATE_COMPAER,
//                         payload: res.data,
//                     });
//                     dispatch(getAllCartAction());
//                 }
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: UPDATE_COMPAER,
//                     payload: error,
//                 });
//             });
//     };
// };

export const deleteCompareDataAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/compareItem/delete/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_COMPAER,
                        payload: res.data,
                    });
                    dispatch(getAllCompareDataAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_COMPAER,
                    payload: error,
                });
            });
    };
};
