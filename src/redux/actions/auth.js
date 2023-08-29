import auth from "../../config/auth";
import { ApiGet, ApiPost, ApiPostNoAuth, ApiPut } from "../../helper/axios";

import {
  IS_LOADING,
  ADD_LOGIN_LOADING,
  ADD_LOGIN_ERROR,
  ADD_LOGIN_SUCCESS,
  GET_PROFILE_USER,
  LOGOUT,
  UPDATE_PROFILE_USER,
  SIGNUP_DATA,
  GET_ALL_USERS_DATA,
  DELETE_PROFILE_USER,
  GET_ALL_DEACTIVE_USERS_DATA,
  RECOVER_PROFILE_USER,
  GET_MY_PROFILE,
} from "../type";

export const SignUpAction = (signupData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/user/register`, signupData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: SIGNUP_DATA,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_DATA,
          payload: error,
        });
      });
  };
};

export const loginAction = (LogInData) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });
    dispatch({
      type: ADD_LOGIN_LOADING,
      payload: true,
    });
    return ApiPostNoAuth(`/api/v1/user/admin-login`, LogInData)
      .then((res) => {
        auth.setAuthToken(res.data.token);
        let data = res.data;
        delete data.password;
        dispatchLoginActions(dispatch, {
          loading: false,
          success: res.data,
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        dispatchLoginActions(dispatch, {
          loading: false,
          error: error,
        });
      });
  };
};
const dispatchLoginActions = (dispatch, { error, loading, success }) => {
  if (error !== undefined) {
    dispatch({
      type: ADD_LOGIN_ERROR,
      payload: error,
    });
  }
  if (loading !== undefined) {
    dispatch({
      type: ADD_LOGIN_LOADING,
      payload: loading,
    });
    dispatch({
      type: IS_LOADING,
      payload: loading,
    });
  }
  if (success !== undefined) {
    dispatch({
      type: ADD_LOGIN_SUCCESS,
      payload: success,
    });
  }
};

export const logoutAction = () => {
  return async (dispatch) => {
    // Make the logout API call
    ApiPut("/api/v1/user/logout")
      .then((res) => {
        dispatch({
          type: LOGOUT,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGOUT,
          payload: error,
        });
      });
  };
};

export const MyProfileAction = () => {
  return async (dispatch) => {
    ApiGet("/api/v1/user/profile")
      .then((res) => {
        dispatch({
          type: GET_MY_PROFILE,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MY_PROFILE,
          payload: error,
        });
      });
  };
};
