import { ADD_BRAND, UPDATE_BRAND, DELETE_BRAND, GET_ALL_BRAND, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllBrand: [],
    addBrand: [],
    updateBrand: [],
    deleteBrand: [],
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                getAllBrand: action.payload

            };
        case ADD_BRAND:
            return {
                ...state,
                addBrand: action.payload
            };
        case UPDATE_BRAND:
            return {
                ...state,
                updateBrand: action.payload
            };
        case DELETE_BRAND:
            return {
                ...state,
                deleteBrand: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default brandReducer;