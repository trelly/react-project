const initialState = {
    title: '', //文章标题
    abstract: '', //文章摘要
    content: '', //文章正文
    authors: '', //作者
    tag: '', //文章类型,目前只支持一种类型
    self_appoint: '',
    save: 0,
    pgc_id: '', //pgc文章id
    show_ads: 0, //是否显示广告
    push_status: 0,//是否弹窗
    force_ads:2,
    after_pass_modify:0,
    urgent_push:0,
    gov_media_id:0, //政府媒体号id
    subsidy:0, //奖金
    pgc_feed_covers:[],
    timer_status:0, //是否定时发布[0]否,[1]是
    timer_time: '', //定时发布时间
    claim_origin:0, //
    slave_title: '', //子标题
    is_abtest:0, //是否采用abtest发布
    slave_item_id:0
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ARTICLE':
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}

export default articleReducer
