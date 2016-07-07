/*所有dialog组件Reducer用于控制所有dialog的展示状态，可在state对象中增加对应的dialog的显示状态控制标志*/

import { DIALOG_STATUS } from '../constants/ActionTypes'

const initialState = {
    status: 'hide',/*原创Dialog显示隐藏状态*/
    popup_dialog_status: 'hide'/*弹窗Dialog显示隐藏状态*/
};

function originReducer(state = initialState, action) {
    switch(action.type) {
        case DIALOG_STATUS:
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}

export default originReducer
