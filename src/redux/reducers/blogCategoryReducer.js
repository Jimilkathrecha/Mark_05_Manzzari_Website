import { ADD_BLOGCATEGORY, UPDATE_BLOGCATEGORY, DELETE_BLOGCATEGORY, GET_ALL_BLOGCATEGORY, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllBlogCategory: [],
    addBlogCategory: [],
    updateBlogCategory: [],
    deleteBlogCategory: [],
};

const blogCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOGCATEGORY:
            return {
                ...state,
                getAllBlogCategory: action.payload

            };
        case ADD_BLOGCATEGORY:
            return {
                ...state,
                addBlogCategory: action.payload
            };
        case UPDATE_BLOGCATEGORY:
            return {
                ...state,
                updateBlogCategory: action.payload
            };
        case DELETE_BLOGCATEGORY:
            return {
                ...state,
                deleteBlogCategory: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default blogCategoryReducer;