export const SAVE_ARTICLE = 'SAVE_ARTICLE'

export function saveArticle(data) {
    return {
        type: SAVE_ARTICLE,
        data
    }
}