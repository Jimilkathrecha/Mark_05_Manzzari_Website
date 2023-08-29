import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllCategory: [],
    addCategory: [],
    updateCategory: [],
    deleteCategory: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                getAllCategory: action.payload

            };
        case ADD_CATEGORY:
            return {
                ...state,
                addCategory: action.payload
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                updateCategory: action.payload
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                deleteCategory: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default categoryReducer;