import {
    SWITCH_MENU
} from '../constants/ActionTypes'

const initialState = {
    index: 0
};

function menuReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_MENU:
            return {
                index: action.index
            };
        default:
            return state
    }
}

export default menuReducer
