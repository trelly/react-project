import {
    SWITCH_MENU,
    FETCH_PROFILE,
    FETCH_MEDIA,
    DIALOG_STATUS,
    ARTICLE_DRAFT,
    ARTCILE_OFF,
    ARTICLE_RELEASE,
    FETCH_NOTIFICATION
} from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'

export function saveArticle(data) {
    return {
        type: ARTICLE_RELEASE,
        data
    };
}

export function saveDraft(data) {
    return {
        type: ARTICLE_DRAFT,
        data
    };
}

export function cancleArticle(articleId) {
    return {
        type: ARTICLE_OFF,
        articleId
    };
}

// 菜单切换
export function switchMenu(index) {
    return {
        type: SWITCH_MENU,
        index
    };
}

// 对话框展示隐藏
export function toggleDialog(data) {
    return {
        type: DIALOG_STATUS,
        data
    }
}

// 获取媒体用户信息
function fetchMedia(json) {
    return {
        type: FETCH_MEDIA,
        media: json.data.media,
        receivedAt: Date.now()
    };
}
export function fetchMediaPosts() {
    return function(dispatch) {
        return fetch(`/media/get_media_infor/`, {
            credentials: 'include'
        }).then(response => response.json()).then(json =>
            dispatch(fetchMedia(json))
        );
    };
}

// 获取用户信息
function fetchUser(json) {
    return {
        type: FETCH_PROFILE,
        user: json.data.user,
        receivedAt: Date.now()
    };
}

export function fetchUserPosts() {
    return function(dispatch) {
        return fetch(`/media/get_current_user/`, {
            credentials: 'include'
        }).then(response => response.json()).then(json =>
            dispatch(fetchUser(json))
        )
    };
}

function fetchNotification(json) {
    return {
        type: FETCH_PROFILE,
        notification: json.data,
        receivedAt: Date.now()
    };
}

export function fetchNotificatonPosts() {
    return function(dispatch) {
        return fetch(`//toutiao.com/dongtai/notification/count/?include=2,43,4,5,6,72,84&detail=1`, {
            credentials: 'include'
        }).then(response => {
            // response.setHeader('Access-Control-Allow-Origin': '*');
            return response.json();
        }).then(json =>
            dispatch(fetchNotification(json))
        )
    };
}
