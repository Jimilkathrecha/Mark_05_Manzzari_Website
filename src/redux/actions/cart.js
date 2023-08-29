import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_CART, UPDATE_CART, DELETE_CART, GET_ALL_CART, } from "../type";

export const getAllCartAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/cart/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_CART,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_CART,
                    payload: error,
                });
            });
    };
};

export const addCartAction = (addCartData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/cart`, addCartData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_CART,
                        payload: res.data,
                    });
                    dispatch(getAllCartAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_CART,
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
//                         type: UPDATE_CART,
//                         payload: res.data,
//                     });
//                     dispatch(getAllCartAction());
//                 }
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: UPDATE_CART,
//                     payload: error,
//                 });
//             });
//     };
// };

export const deleteCartAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/cart/delete/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_CART,
                        payload: res.data,
                    });
                    dispatch(getAllCartAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_CART,
                    payload: error,
                });
            });
    };
};
