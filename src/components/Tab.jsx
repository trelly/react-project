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
                <ul class="t-menu-bar">
                    <li class="t-menu active"><i class="iconfont icon-articletab"></i><span class="t-icon-text">文章</span></li>
                    <li class="t-menu"><i class="iconfont icon-videotab"></i><span class="t-icon-text">视频</span></li>
                    <li class="t-menu"><i class="iconfont icon-pictab"></i><span class="t-icon-text">图集</span></li>
                    <li class="t-menu"><i class="iconfont icon-testtab"></i><span class="t-icon-text">测试</span></li>
                </ul>
            )
        }
        return null;
    }
}

export default Tab