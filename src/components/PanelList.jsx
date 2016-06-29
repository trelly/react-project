/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import Panel from './Panel.jsx'

class PanelList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let { active } = this.props;
        return (
            <div>
                {React.Children.map(this.props.children, (element, index) => {
                    console.log(active);
                    if (active === index) {
                        return (<Panel active="1">{element}</Panel>)
                    }
                    else {
                        return null
                    }
                })}
            </div>
        )
    }
}

export default PanelList
