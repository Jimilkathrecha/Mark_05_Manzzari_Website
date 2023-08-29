import { ADD_SETTING, UPDATE_SETTING, DELETE_SETTING, GET_ALL_SETTING, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllSetting: [],
    addSetting: [],
    updateSetting: [],
    deleteSetting: [],
};

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SETTING:
            return {
                ...state,
                getAllSetting: action.payload

            };
        case ADD_SETTING:
            return {
                ...state,
                addSetting: action.payload
            };
        case UPDATE_SETTING:
            return {
                ...state,
                updateSetting: action.payload
            };
        case DELETE_SETTING:
            return {
                ...state,
                deleteSetting: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default settingReducer;