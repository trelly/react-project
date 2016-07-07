import {
    SWITCH_MENU,
    FETCH_PROFILE,
    FETCH_MEDIA,
    FETCH_NOTIFICATION,
} from '../constants/ActionTypes'

const initialState = {};
export function mediaReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MEDIA:
            return Object.assign({}, state, action.media);
        default:
            return state;
    }
}

const initialUserState = {};
export function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case FETCH_PROFILE:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}

const initialNotificationState = {}
export function notificationReducer(state = initialNotificationState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATION:
            return Object.assign({}, state, action.notification);
        default:
            return state;
    }
}
