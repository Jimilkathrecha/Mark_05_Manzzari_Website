import { ADD_COLLECTION, UPDATE_COLLECTION, DELETE_COLLECTION, GET_ALL_COLLECTION, GET_ALL_COLLECTION_NAME_LIST, GET_ONE_COLLECTION, RESET_GLOBAL_STATE, REMOVE_ITEM_COLLECTION } from '../type';

const initialState = {
    getAllCollection: [],
    addCollection: [],
    updateCollection: [],
    deleteCollection: [],
    getAllCollectionNameList: [],
    getOneCollection: [],
    removeItemCollection: [],

};

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COLLECTION:
            return {
                ...state,
                getAllCollection: action.payload

            };
        case GET_ALL_COLLECTION_NAME_LIST:
            return {
                ...state,
                getAllCollectionNameList: action.payload

            };
        case GET_ONE_COLLECTION:
            return {
                ...state,
                getOneCollection: action.payload

            };
        case ADD_COLLECTION:
            return {
                ...state,
                addCollection: action.payload
            };
        case UPDATE_COLLECTION:
            return {
                ...state,
                updateCollection: action.payload
            };
        case DELETE_COLLECTION:
            return {
                ...state,
                deleteCollection: action.payload
            };
        case REMOVE_ITEM_COLLECTION:
            return {
                ...state,
                removeItemCollection: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default collectionReducer;