import {
  RESET_GLOBAL_STATE,
  ADD_LOGIN_ERROR,
  ADD_LOGIN_LOADING,
  ADD_LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_DATA,
  GET_MY_PROFILE,
} from "../type";

const initialState = {
  addLoginLoading: false,
  addLoginSuccess: null,
  addLoginError: null,
  isLoggedIn: false,
  signupUserData: [],
  getMyProfile: null,
};
 
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_DATA:
      return {
        ...state,
        signupUserData: action.payload,
      };
    case ADD_LOGIN_LOADING:
      return {
        ...state,
        addLoginLoading: action.payload,
      };
    case ADD_LOGIN_SUCCESS:
      return {
        ...state,
        addLoginSuccess: action.payload,
      };
    case ADD_LOGIN_ERROR:
      return {
        ...state,
        addLoginError: action.payload,
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        getMyProfile: action.payload,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
      };

    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
