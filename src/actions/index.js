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
// 保存文章
function saveArticleSuccess(data) {
    return {
        type: ARTICLE_RELEASE,
        data
    };
}

function saveArticleFailure(data) {
    return {
        type: ARTICLE_RELEASE,
        data
    };
}

export function saveArticle(data) {
    return function(dispatch) {
        console.log(data);
        return $.ajax({
            type: 'post',
            url: '/edit_article_post/',
            dataType: 'json',
            data,
            success: function(json) {
                dispatch(saveArticleSuccess(json));
            },
            error: function(json) {
                dispatch(saveArticleFailure(json));
            }
        });
    };
}

// 从主页撤销 /hide_article/ post id=xx&item_id=x&group_id:xx&pgc_id:xx&source_type=0


// 保存草稿
export function saveDraft(data) {
    return {
        type: ARTICLE_DRAFT,
        data
    };
}

// 取消发布
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
// 获取通知
function fetchNotification(json) {
    return {
        type: FETCH_NOTIFICATION,
        notification: json.data,
        receivedAt: Date.now()
    };
}

export function fetchNotificatonPosts() {
    return function(dispatch) {
        return $.ajax({
            type: 'get',
            url: '//toutiao.com/dongtai/notification/count/?include=2,43,4,5,6,72,84&detail=1',
            dataType: 'jsonp'
        }).then(function(json) {
            dispatch(fetchNotification(json));
        });
    };
}
