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
        return (
            <button class="t-button">{this.props.children}</button>
        )
    }
}

export default Button