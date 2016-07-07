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
import Button from '../components/Button.jsx'
import Dialog from '../components/Dialog.jsx'
import Origin from './Origin.jsx'
import { toggleDialog, saveArticle } from '../actions'
import './origin.css'

class Article extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false,
            modifyPopup: false/*判断是否为修改弹窗文字*/
        }
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    /*选择弹窗的点击处理*/
    popupClick() {
        const { dispatch, article } = this.props;
        if(article.push_status) {
            dispatch(saveArticle({ push_status: 0 }));
        }else {
            dispatch(saveArticle({ push_status: 1 }));
            dispatch(toggleDialog( { popup_dialog_status: 'show' } ));
        }
    }
    /*修改弹窗内容的点击处理*/
    modifyPopupClick() {
        const { dispatch } = this.props;
        dispatch(toggleDialog( { popup_dialog_status: 'show' } ));
        this.setState({modifyPopup: true});
    }
    /*弹窗Dialog中取消按钮的点击处理*/
    popupDialogCancelClick() {
        const { dispatch } = this.props;
        /*修改弹窗dialog和非修改中的取消按钮不同处理*/
        if(this.state.modifyPopup) {
            dispatch(toggleDialog( { popup_dialog_status: 'hide' }));
        }else {
            dispatch(saveArticle({ push_status: 0 }) );
            dispatch(toggleDialog( { popup_dialog_status: 'hide' }));
        }
        this.setState({modifyPopup: false});
    }
    /*弹窗Dialog中确定按钮的点击处理*/
    popupDialogOkClick() {
        const { dispatch } = this.props;
        dispatch( saveArticle({ push_status: 1 }) );
        dispatch( toggleDialog({ popup_dialog_status: 'hide' }));
    }
    render() {
        const { dispatch } = this.props;
        let panelShowClassName = classNames({
            'panel-slider-collapse': this.state.collapsed
        })
        return (
            <div className={panelShowClassName}>
                <div className="t-content">
                    <div className="t-tab-content">
                        <div className="t-tab-item">
                            <div className="t-menu-collapse">
                                <Accordion title="大纲">
                                    <span>213123</span>
                                </Accordion>
                                <Accordion title="功能">
                                    <ControlGroup label="原创">
                                            <div className={ "origin-status" + (this.props.article.claim_origin ? " article-active" : "") }>已申请原创标签</div>
                                            <Button className={ "origin-status" + (this.props.article.claim_origin ? "" : " article-active") } HandleClick={() => dispatch(toggleDialog({status:'show'}))}>原创声明</Button>
                                            <Origin></Origin>
                                    </ControlGroup>
                                    <ControlGroup label="广告">
                                        <div className="t-ad-item">
                                            <i className={ "ad-radio" + (this.props.article.show_ads ? ' selected' : "") } onClick={() => dispatch( saveArticle({ show_ads: !this.props.article.show_ads }) )}></i>
                                            展示广告
                                        </div>
                                    </ControlGroup>
                                    <ControlGroup label="分类">
                                        <select name="tag">
                                            <option value="0">选择分类</option>
                                        </select>
                                    </ControlGroup>
                                    <ControlGroup label="封面">
                                        <div><input type="radio" value="" name="ad"/> <span>自动</span></div>
                                        <div><input type="radio" value="" name="ad"/> <span>单图模式</span></div>
                                        <div><input type="radio" value="" name="ad"/> <span>三图模式(仅在wifi模式下显示)</span></div>
                                    </ControlGroup>
                                    <ControlGroup label="定时发布">
                                        <div><input type="text" name="timer_time"/></div>
                                        <div><span>设定时间2-24小时</span></div>
                                    </ControlGroup>
                                    <ControlGroup label="弹窗">
                                        <div className="t-popup-item">
                                            <i className={ "popup-radio" + (this.props.article.push_status ? ' selected' : "") } onClick={this.popupClick.bind(this)}></i>
                                            <span>弹窗申请</span>
                                            <a className={ "push-message" + (this.props.article.push_status ? " article-active" : "")} onClick={this.modifyPopupClick.bind(this)}>修改推送信息</a>
                                        </div>
                                        <Dialog dialogClass='popup-dialog' toggleStatus={this.props.toggleStatus.popup_dialog_status}>
                                            <div className="popup-header popup-title">填写弹窗信息</div>
                                            <div className="popup-body">
                                                <div className="edit-cell push-cell">
                                                    <div className="edit-main">
                                                        <div className="edit-label">Android</div>
                                                        <div className="edit-input">
                                                            <input type="text" className="popup-android-input form-control" maxLength="15" placeholder="弹窗标题" />
                                                        </div>
                                                        <div className="right-label"></div>
                                                    </div>
                                                    <div className="edit-main">
                                                        <div className="edit-label"></div>
                                                        <div className="edit-input">
                                                            <textarea name="" maxLength="45" placeholder="弹窗文案" className="pupup-input form-control popup-content"></textarea>
                                                        </div>
                                                        <div className="right-label"></div>
                                                    </div>
                                                </div>
                                                <div className="edit-cell push-cell">
                                                    <div className="edit-main">
                                                        <div className="edit-label">iOS</div>
                                                        <div className="edit-input">
                                                            <input type="text" className="popup-ios-input form-control" maxLength="42" placeholder="弹窗文案" />
                                                        </div>
                                                        <div className="right-label"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popup-footer">
                                                <div className="popup-btns">
                                                    <Button className="popup-btn" HandleClick={this.popupDialogOkClick.bind(this)}>保存</Button>
                                                    <Button className="popup-btn popup-cancel-btn" HandleClick={this.popupDialogCancelClick.bind(this)}>取消</Button>
                                                </div>
                                            </div>
                                        </Dialog>
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
        article: state.article,
        toggleStatus: state.dialog/*Dialog状态判断*/
    };
}

export default connect(stateMapToProps)(Article);
