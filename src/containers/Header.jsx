/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <header className="t-header">
                <div className="t-logo"></div>
                <ul className="t-header-menu">
                    <li className="t-publish">
                        <div className="t-menu-title">
                            <button className="t-publish-btn">发表 <span className="t-caret"></span></button>
                        </div>
                        <div className="t-dropdown">
                            <span className="t-dropdown-caret"></span>
                            <ul className="t-publish-menu">
                                <li className="t-menu-item">存草稿</li>
                                <li className="t-menu-item">取消发布</li>
                            </ul>
                        </div>
                    </li>
                    <li className="t-message" onClick="">
                        <div className="t-menu-title">
                            <i className="icon-message"></i>
                        </div>
                        <div className="t-dropdown">
                            <span className="t-dropdown-caret"></span>
                            <ul className="t-publish-menu">
                                <li className="t-menu-item"><a target="inform" href="/message/#inform">通知</a></li>
                                <li className="t-menu-item"><a target="inform" href="/comment/">评论</a></li>
                                <li className="t-menu-item"><a target="inform" href="/message/#subscribe">订阅</a></li>
                                <li className="t-menu-item"><a target="inform" href="/message/#collect">收藏</a></li>
                                <li className="t-menu-item"><a target="inform" href="/message/#retransmit">转发</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="t-profile">
                        <div className="t-profile-info">
                            <div><span className="t-profile-type">{this.props.media.name}</span></div>
                            <div><span className="t-profile-name">{this.props.media.name}</span></div>
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
    return {
        article: state.article,
        media: state.media
    };
}

export default connect(stateMapToProps)(Header);