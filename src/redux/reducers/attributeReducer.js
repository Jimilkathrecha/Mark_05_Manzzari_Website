import { ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE, GET_ALL_ATTRIBUTE, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllAttribute: [],
    addAttribute: [],
    updateAttribute: [],
    deleteAttribute: [],
};

const attributeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ATTRIBUTE:
            return {
                ...state,
                getAllAttribute: action.payload

            };
        case ADD_ATTRIBUTE:
            return {
                ...state,
                addAttribute: action.payload
            };
        case UPDATE_ATTRIBUTE:
            return {
                ...state,
                updateAttribute: action.payload
            };
        case DELETE_ATTRIBUTE:
            return {
                ...state,
                deleteAttribute: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default attributeReducer;