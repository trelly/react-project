/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import MediaType from '../components/MediaType.jsx'
import {SplitButton, MenuItem} from 'react-bootstrap';
import {saveArticle, saveDraft, cancleArticle} from '../actions'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {dispatch, article, media, notification} = this.props;
        return (
            <header className="t-header">
                <div className="t-logo"></div>
                <ul className="t-header-menu">
                    <Dropdown ts="t-publish">
                        <button className="t-publish-btn" onClick={() => dispatch(saveArticle(article))}>发表
                            <span className="t-caret"></span>
                        </button>
                        <li className="t-menu-item">存草稿</li>
                        <li className="t-menu-item">取消发布</li>
                    </Dropdown>
                    <Dropdown ts="t-message">
                        <div>
                            <button className="icon-message"></button>
                            <span className="t-notification-num">{notification.update_count}</span>
                        </div>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#inform">通知</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/comment/">评论</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#subscribe">订阅</a>
                            <span className="t-num-tip">{notification.detail_counts['2']}</span>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#collect">收藏</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#retransmit">转发</a>
                            <span className="t-num-tip">{notification.detail_counts['5']}</span>
                        </li>
                    </Dropdown>
                    <li className="t-profile">
                        <div className="t-profile-info">
                            <div>
                                <MediaType type={media.type}/>
                            </div>
                            <div>
                                <span className="t-profile-name">{media.name}</span>
                            </div>
                        </div>
                        <div className="t-profile-img">
                            <img width="100%" src={this.props.media.avatar_url}/>
                        </div>
                    </li>
                </ul>
            </header>
        )
    }
}

function stateMapToProps(state) {
    return {article: state.article, media: state.media, notification: state.notification};
}

export default connect(stateMapToProps)(Header);
