/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Tab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            closed: true
        };
    }
    show() {
        this.setState({
            closed: false
        })
    }
    render() {
        if (!this.state.closed) {
            return (
                <div class="t-dialog">
                    <div>
                        <span class="t-dialog-close" onClick={()=>this.setState({closed: true})}>X</span>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Tab