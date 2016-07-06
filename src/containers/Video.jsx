/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Accordion from '../components/Accordion.jsx'
import TinyMCE from 'react-tinymce'
import classNames from 'classnames'
import config from '../constants/TinyMceConfig'
import ControlGroup from '../components/ControlGroup.jsx'

class Video extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false
        }
    }
    render() {
        let panelShowClassName = classNames({'panel-slider-collapse': this.state.collapsed})
        return (
            <div>
                视频上传
            </div>
        )
    }
}

// 这里的 state 是 Connect 的组件的
function stateMapToProps(state) {
    return {};
}

export default connect(stateMapToProps)(Video);
