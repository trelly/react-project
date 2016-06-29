import {SWITCH_MENU} from '../constants/ActionTypes'

const initialState = {
    pgc_debut: 0, //是否pgc首发
    debut_url: '', //首发URL地址
    debut_mp: '', //首发媒体平台
    debut_author: '', //首发作者
};

function menuReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_MENU:
            return {index: action.index};
        default:
            return state
    }
}

export default menuReducer