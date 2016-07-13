/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Dropdown extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: true
        }
    }
    show() {
        this.setState({
            collapsed: false
        })
    }
    hide() {
        this.setState({
            collapsed: true
        })
    }
    render() {
        let {ts} = this.props;
        if (this.state.collapsed) {
            return (
                <li className={ts} onClick={this.show.bind(this)}>
                    <div className="t-menu-title">
                        {this.props.children[0]}
                    </div>
                </li>
            )
        }
        else {
            return (<li className={ts} onFocus={this.show.bind(this)} onBlur={this.hide.bind(this)}>
                <div className="t-menu-title">
                    {this.props.children[0]}
                </div>
                <div className="t-dropdown" onMouseLeave={this.hide.bind(this)}>
                    <span className="t-dropdown-caret"></span>
                    <ul className="t-publish-menu">
                        {this.props.children.slice(1)}
                    </ul>
                </div>
            </li>)
        }
    }
}

export default Dropdown
