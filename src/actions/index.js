import { SWITCH_MENU } from '../constants/ActionTypes'

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

