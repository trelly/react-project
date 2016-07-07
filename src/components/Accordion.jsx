/**
 * @file Accordion.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Accordion extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false
        }
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        let panelClassName = classNames('t-panel-collapse', {
            show: this.state.collapsed
        })
        let collapseIconClassName = classNames('t-panel-title none-select', {
            't-icon-uncollapsed': this.state.collapsed
        })
        return (
            <div className="t-panel">
                <div className={collapseIconClassName} onClick={this.toggle.bind(this)} role="tab" id="headingOne">
                    <a role="button">{this.props.title}</a>
                </div>
                <div className={panelClassName} role="tabpanel">
                    <div className="t-panel-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default Accordion
