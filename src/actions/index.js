import { SWITCH_MENU, FETCH_PROFILE, DIALOG_STATUS } from '../constants/ActionTypes'
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

// 对话框展示隐藏
export function toggleDialog(status) {
    return {
        type: DIALOG_STATUS,
        status: status || 'show'
    }
}

// 获取用户信息

function fetchMedia(media, json) {
    return {
        type: FETCH_PROFILE,
        media,
        mediaInfo: json.data.media,
        receivedAt: Date.now()
    }
}

export function fetchPosts(media) {
    return function (dispatch) {
        return fetch(`/media/get_media_infor/`, {credentials: 'include'}).then(response => response.json()).then(json =>
            dispatch(fetchMedia(media, json))
        )
    }
}

