/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Accordion from '../components/Accordion.jsx'
import TinyMCE from 'react-tinymce'
import classNames from 'classnames'
import config from '../constants/TinyMceConfig'
import ControlGroup from '../components/ControlGroup.jsx'

class Panels extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false
        }
    }
    toggle() {
        console.log(1)
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        let panelShowClassName = classNames('t-content', {
            'panel-slider-collapse': this.state.collapsed
        })
        return (
            <div>
                <div className={panelShowClassName}>
                    <div className="t-tab-content">
                        <div className="t-tab-item">
                            <div className="t-menu-collapse">
                                <Accordion title="大纲">
                                    <span>213123</span>
                                </Accordion>
                                <Accordion title="功能">
                                    <ControlGroup label="原创">
                                        原创
                                    </ControlGroup>
                                    <ControlGroup label="广告">
                                        <input type="radio" value="" name="ad"/> <span>展示广告</span>
                                    </ControlGroup>
                                    <ControlGroup label="分类">
                                        原创
                                    </ControlGroup>
                                    <ControlGroup label="封面">
                                        原创
                                    </ControlGroup>
                                    <ControlGroup label="定时发布">
                                        原创
                                    </ControlGroup>
                                    <ControlGroup label="封面">
                                        原创
                                    </ControlGroup>
                                </Accordion>
                                <Accordion title="模板">
                                    <span>213123</span>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="t-collapse" onClick={this.toggle.bind(this)}></div>
                </div>
                <div className="t-editor">
                    <div className="t-editor-wrap">
                        <TinyMCE
                            content=""
                            config={config}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// 这里的 state 是 Connect 的组件的
function stateMapToProps(state) {
    return {
        
    };
}

export default connect(stateMapToProps)(Panels);
