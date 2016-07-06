import {
    SWITCH_MENU,
    FETCH_PROFILE,
    FETCH_MEDIA,
    DIALOG_STATUS,
    SAVE_ARTICLE
} from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'

export function saveArticle(data) {
    return {
        type: SAVE_ARTICLE,
        data
    }
}

// 菜单切换
export function switchMenu(index) {
    return {
        type: SWITCH_MENU,
        index
    };
}

// 对话框展示隐藏 原创
export function toggleDialog(status) {
    return {
        type: DIALOG_STATUS,
        status: status || 'show'
    }
}

// 获取用户信息

function fetchMedia(json) {
    return {
        type: FETCH_MEDIA,
        media: json.data.media,
        receivedAt: Date.now()
    }
}

export function fetchMediaPosts() {
    return function(dispatch) {
        return fetch(`/media/get_media_infor/`, {
            credentials: 'include'
        }).then(response => response.json()).then(json =>
            dispatch(fetchMedia(json))
        )
    }
}

// 获取用户信息

function fetchUser(json) {
    return {
        type: FETCH_PROFILE,
        user: json.data.user,
        receivedAt: Date.now()
    }
}

export function fetchUserPosts() {
    return function(dispatch) {
        return fetch(`/media/get_current_user/`, {
            credentials: 'include'
        }).then(response => response.json()).then(json =>
            dispatch(fetchUser(json))
        )
    }
}
