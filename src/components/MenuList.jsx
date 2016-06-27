/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Menu from './Menu.jsx'

class MenuList extends Component {
    constructor(props, context) {
        super(props, context)
        this.states = {
            index: 1
        }
    }
    switchMenu(index) {
        console.log(index)
        this.setState({
            index: index
        })
    }
    render() {
        return (
            <ul className="t-menu-bar">
                {React.Children.map(this.props.children, (element, index) => {
                    if (this.states.index == index) {
                        return (<Menu {...element.props} switchMenu={index=>this.switchMenu(index)} active="true" />)
                    }
                    else {
                        return (<Menu {...element.props} switchMenu={index=>this.switchMenu(index)}/>)
                    }
                })}
            </ul>
        )
    }
}

export default MenuList