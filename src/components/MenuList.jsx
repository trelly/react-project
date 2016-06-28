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
        console.log(this.props)
        let {currentIndex} = this.props;
        return (
            <ul className="t-menu-bar">
                {React.Children.map(this.props.children, (element, index) => {
                    return (<Menu {...element.props} onClick={()=>this.props.onSwitchClick(index)} key={index} active={currentIndex === index ? 1 : 0}/>)
                })}
            </ul>
        )
    }
}

export default MenuList
