import {SWITCH_MENU} from '../constants/ActionTypes'

const initialState = {
    video_vid: 0, //视频id
    video_vu: '',
    video_vname: '',
    video_vposter: '',
    vids_to_del:[]
};

function videoReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_MENU:
            return {index: action.index};
        default:
            return state
    }
}

export default videoReducer