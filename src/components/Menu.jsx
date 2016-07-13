/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

class Menu extends Component {
    constructor(props, context) {
        super(props, context);
    }
    location(link) {
        location.href = link;
    }
    render() {
        let {title, icon, active, onClick, link} = this.props
        let className = classNames('t-menu', {'active': active})
        let iconClass = classNames('iconfont', icon);
        if (link) {
            return (
                <li className={className} link={link} onClick={()=>this.location(link)}>
                    <i className={iconClass}></i>
                    <span className="t-icon-text">{title}</span>
                </li>
            )
        } else {
            return (
                <li className={className} onClick={onClick}>
                    <i className={iconClass}></i>
                    <span className="t-icon-text">{title}</span>
                </li>
            )
        }
    }
}

PropTypes.type = {
    title: PropTypes.string.require,
    icon: PropTypes.string.require
}

export default Menu
