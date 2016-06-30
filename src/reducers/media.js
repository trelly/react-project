import {SWITCH_MENU, FETCH_PROFILE} from '../constants/ActionTypes'

const initialState = {
    media: {}
};

function mediaReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROFILE:
            return Object.assign({}, state, action.mediaInfo)
        default:
            return state
    }
}

export default mediaReducer