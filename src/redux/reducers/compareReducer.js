import { ADD_COMPAER, UPDATE_COMPAER, DELETE_COMPAER, GET_ALL_COMPAER,RESET_GLOBAL_STATE } from "../type";

const initialState = {
    getAllCompare: [],
    addCompare: [],
    updateCompare: [],
    deleteCompare: [],
};

const compareReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COMPAER:
            return {
                ...state,
                getAllCompare: action.payload
            };
        case ADD_COMPAER:
            return {
                ...state,
                addCompare: action.payload
            };
        case UPDATE_COMPAER:
            return {
                ...state,
                updateCompare: action.payload
            };
        case DELETE_COMPAER:
            return {
                ...state,
                deleteCompare: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default compareReducer;