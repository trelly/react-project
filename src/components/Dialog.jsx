/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './dialog.css'

class Dialog extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { dialogClass } = this.props;
        if (this.props.toggleStatus === 'show') {
            return (
                <div>
                    <div className="t-mask"></div>
                    <div className="t-container">
                        <div className={dialogClass}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Dialog