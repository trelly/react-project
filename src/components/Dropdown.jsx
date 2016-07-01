/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Button extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {style} = this.props;
        return (
            <li className={style}>
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
        )
    }
}

export default Button