/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { switchMenu } from '../actions'

import MenuList from '../components/MenuList.jsx'

class Slider extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { dispatch } = this.props;
        return (
            <nav className="t-slider-left">
                <div className="t-tab">
                    <MenuList className="t-menu-bar" onSwitchClick={index => dispatch(switchMenu(index))} currentIndex={this.props.menu.index}>
                        <div className="t-menu" icon="icon-articletab" title="文章"/>
                        <div className="t-menu" icon="icon-videotab" title="视频"/>
                        <div className="t-menu" icon="icon-pictab" title="图集"/>
                        <div className="t-menu" icon="icon-testtab" title="测试"/>
                    </MenuList>
                    <div className="t-menu-other">
                        <div className="t-icon-radius">
                            <i className="iconfont icon-eyecaretab"></i>
                        </div>
                        <div className="t-icon-radius">
                            <i className="iconfont icon-nighttab"></i>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

function stateMapToProps(state) {
    return {
        menu: state.menu
    };
}

export default connect(stateMapToProps)(Slider);