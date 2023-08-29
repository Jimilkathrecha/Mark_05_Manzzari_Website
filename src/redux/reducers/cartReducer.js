import { ADD_CART, UPDATE_CART, DELETE_CART, GET_ALL_CART, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllCart: [],
    addCart: [],
    updateCart: [],
    deleteCart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CART:
            return {
                ...state,
                getAllCart: action.payload

            };
        case ADD_CART:
            return {
                ...state,
                addCart: action.payload
            };
        case UPDATE_CART:
            return {
                ...state,
                updateCart: action.payload
            };
        case DELETE_CART:
            return {
                ...state,
                deleteCart: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default cartReducer;