/**
 * @file Toast.jsx
 * @desc 向导组件
 */
import React, { Component, PropTypes } from 'react'
import '../static/base.css'

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        };
    }
    show() {
        this.setState({
            show: 1
        })
        setTimeout(()=>this.setState({show: 0}), this.props.duration)
    }
    render() {
        if (this.state.show) {
            return (
                <div className="t-toast">
                    {this.props.children}
                </div>
            )
        }
        return null;
    }
}

Toast.defaultProps = {
    duration: 2000
}

PropTypes.type = {
    duration: PropTypes.number
}

export default Toast