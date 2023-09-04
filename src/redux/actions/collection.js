import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import {
  ADD_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION,
  GET_ALL_COLLECTION,
  GET_ALL_COLLECTION_NAME_LIST,
  GET_ONE_COLLECTION,
  REMOVE_ITEM_COLLECTION,
} from "../type";

export const getAllCollectionAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/collections/get/all`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_COLLECTION,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_COLLECTION,
          payload: error,
        });
      });
  };
};

export const getAllCollectionNameListAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/collections/list`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_COLLECTION_NAME_LIST,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_COLLECTION_NAME_LIST,
          payload: error,
        });
      });
  };
};

export const getOneCollectionAction = (collectionId) => {
  return (dispatch) => {
    return ApiGet(`/api/v1/collections/get-one-collection/${collectionId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ONE_COLLECTION,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ONE_COLLECTION,
          payload: error,
        });
      });
  };
};

export const addCollectionAction = (addCollectionData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/collections/add`, addCollectionData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_COLLECTION,
            payload: res.data,
          });
          dispatch(getAllCollectionAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_COLLECTION,
          payload: error,
        });
      });
  };
};

export const updateCollectionAction = (updateCollectionData) => {
  return (dispatch) => {
    return ApiPut(
      `/api/v1/collections/update-collecction/${updateCollectionData._id}`,
      updateCollectionData
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_COLLECTION,
            payload: res.data,
          });
          dispatch(getAllCollectionAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_COLLECTION,
          payload: error,
        });
      });
  };
};

export const deleteCollectionAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/collections/delete-collection/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_COLLECTION,
            payload: res.data,
          });
          dispatch(getAllCollectionAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_COLLECTION,
          payload: error,
        });
      });
  };
};

export const removeItemCollectionAction = (DeleteData) => {
  return (dispatch) => {
    return ApiDelete(
      `/api/v1/collections/delete-item/${DeleteData?._id}?itemId=${DeleteData?.itemId}`
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: REMOVE_ITEM_COLLECTION,
            payload: res.data,
          });
          dispatch(getAllCollectionAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: REMOVE_ITEM_COLLECTION,
          payload: error,
        });
      });
  };
};
