/**
 * @file MediaType.jsx
 * @desc 显示媒体类型
 */
import React, { Component, PropTypes } from 'react';
import {mediaTypes} from '../constants/Category'

class MediaType extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {type} = this.props;
        let mediaName = '';
        if (mediaTypes[type]) {
              mediaName = mediaTypes[type];
        }
        if (mediaName) {
          return (<span className="t-profile-type">{mediaName}</span>);
        }
        return null;
    }
}

PropTypes.type = {
    type: PropTypes.number.require
};

export default MediaType;
