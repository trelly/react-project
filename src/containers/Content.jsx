/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import PanelList from '../components/PanelList.jsx'
import Article from './Article.jsx'
import Video from './Video.jsx'
import AlbumPhoto from './AlbumPhoto.jsx'
import Test from './Test.jsx'

class Content extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {menu} = this.props;
        return (
            <div className="t-main">
                <PanelList active={menu.index}>
                    <Article/>
                    <Video/>
                    <AlbumPhoto/>
                    <Test/>
                </PanelList>
            </div>
        )
    }
}

function stateMapToProps(state) {
    return {menu: state.menu};
}

export default connect(stateMapToProps)(Content);
