import { DIALOG_STATUS } from '../constants/ActionTypes'

const initialState = {
    status: 'hide'
};

function originReducer(state = initialState, action) {
    switch(action.type) {
        case DIALOG_STATUS:
            return { status: action.status };
        default:
            return state
    }
}

export default originReducer
