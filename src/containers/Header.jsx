/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import {saveArticle, saveDraft, cancleArticle} from '../actions'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
      const {dispatch, article} = this.props;
        return (
            <header className="t-header">
                <div className="t-logo"></div>
                <ul className="t-header-menu">
                    <Dropdown ts="t-publish">
                        <button className="t-publish-btn" onClick={()=>dispatch(saveArticle(article))}>发表
                            <span className="t-caret"></span>
                        </button>
                        <li className="t-menu-item">存草稿</li>
                        <li className="t-menu-item">取消发布</li>
                    </Dropdown>
                    <Dropdown ts="t-message">
                        <button className="icon-message"></button>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#inform">通知</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/comment/">评论</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#subscribe">订阅</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#collect">收藏</a>
                        </li>
                        <li className="t-menu-item">
                            <a target="inform" href="/message/#retransmit">转发</a>
                        </li>
                    </Dropdown>
                    <li className="t-profile">
                        <div className="t-profile-info">
                            <div>
                                <span className="t-profile-type">{this.props.media.name}</span>
                            </div>
                            <div>
                                <span className="t-profile-name">{this.props.media.name}</span>
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
    return {article: state.article, media: state.media};
}

export default connect(stateMapToProps)(Header);
