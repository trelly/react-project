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
    HandleClick() {
        if(this.props.HandleClick) {
            this.props.HandleClick();
        }
    }
    render() {
        return (
            <button className="t-button-origin" onClick={this.HandleClick.bind(this)}>{this.props.children}</button>
        )
    }
}

export default Button