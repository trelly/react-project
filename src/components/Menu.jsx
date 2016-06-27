/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Menu extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {title, icon, active, switchMenu, index} = this.props
        let className = classNames('t-menu', {
            'active': active
        })
        let iconClass = classNames('iconfont', icon);
        return (
            <li className={className} onClick={switchMenu(index)}>
                <i className={iconClass}></i>
                <span className="t-icon-text">{title}</span>
            </li>
        )
    }
}

PropTypes.type = {
    title: PropTypes.string.require,
    icon: PropTypes.string.require
}

export default Menu