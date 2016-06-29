/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'

class Panel extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {active} = this.props
        if (active) {
            return (<div>{this.props.children}</div>)
        }
        else {
            return null
        }
    }
}

export default Panel