/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import Menu from './Menu.jsx'

class MenuList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {currentIndex, onSwitchClick} = this.props;
        return (
            <ul className="t-menu-bar">
                {React.Children.map(this.props.children, (element, index) => {
                    return (<Menu {...element.props} link={element.props.link} onClick={()=>onSwitchClick(index)} key={index} active={currentIndex === index ? 1 : 0}/>)
                })}
            </ul>
        )
    }
}

export default MenuList
