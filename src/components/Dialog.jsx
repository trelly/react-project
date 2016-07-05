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
        // this.state = {
        //     closed: true
        // };
    }
    // show() {
    //     this.setState({
    //         closed: false
    //     })
    // }
    render() {
        if (this.props.toggleStatus === 'show') {
            return (
                <div>
                    <div className="t-mask"></div>
                    <div className="t-container">
                        <div className="t-dialog">
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