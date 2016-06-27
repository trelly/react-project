/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Accordion extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (!this.state.closed) {
            return (
                <div></div>
            )
        }
        return null;
    }
}

export default Dialog