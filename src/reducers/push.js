import {SWITCH_MENU} from '../constants/ActionTypes'

const initialState = {
    push_status:0,
    push_android_title: '', //Android推送标题
    push_android_summary: '', //android推送内容
    push_ios_summary: '', // ios推送内容
};

function pushReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_MENU:
            return {index: action.index};
        default:
            return state
    }
}

export default pushReducer