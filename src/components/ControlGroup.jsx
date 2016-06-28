/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class ControlGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let { title } = this.props
        return (
            <div className="t-control-group">
                <div className="t-label">{this.props.label}</div>
                <div className="t-control">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

PropTypes.type = {
    label: PropTypes.string.require
}

export default ControlGroup