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
                <div className="t-header-menu">
                    <div className="t-publish">
                        <button className="t-publish-btn">发表 <span className="t-caret"></span></button>
                        <div className="t-dropdown">
                            <span className="t-dropdown-caret"></span>
                            <ul className="t-publish-menu">
                                <li className="t-menu-item">存草稿</li>
                                <li className="t-menu-item">取消发布</li>
                            </ul>
                        </div>
                    </div>
                    <div className="t-message">
                        <i className="icon-message"></i>
                    </div>
                    <div className="t-profile">
                        <img width="50" src={this.props.media.avatar_url}/>
                        <div>
                            <span>{this.props.media.name}</span>
                            <span>{this.props.media.name}</span>
                        </div>
                    </div>
                </div>
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