/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class MenuItem extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <li className="t-menu-item"><a target="inform" href="/message/#inform">通知</a></li>
        )
    }
}

export default MenuItem