/*Mask.jsx Dialog的蒙版组件*/
/*暂时未使用，因为z-index布局有问题，导致蒙版和dialog内容的覆盖有问题*/

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'


class Mask extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="t-mask"></div>
        );
    }
}

export default Mask