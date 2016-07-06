import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import ControlGroup from '../components/ControlGroup.jsx'
import Button from '../components/Button.jsx'
import Dialog from '../components/Dialog.jsx'
import { toggleDialog } from '../actions'
import './origin.css'

class Origin extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            slideClass: 'origin-slide-pre',
            index: 0,
            platform: 'mp'
        }
    }
    nextHandleClick() {
        this.setState (
            {
                slideClass : 'origin-slide-next',
                index: 1
            }
        );
    }
    preHandleClick() {
        this.setState (
            {
                slideClass : 'origin-slide-pre',
                index: 0
            }
        );
    }
    mpClick() {
        console.log('mp');
        this.setState (
            {
                platform: 'mp'
            }
        );
    }
    otherClick() {
        console.log('other');
        this.setState (
            {
                platform: 'other'
            }
        );
    }
    okClick() {
        const { dispatch } = this.props;
        dispatch(toggleDialog('hide'));
        this.setState({
            slideClass: 'origin-slide-pre',
            index: 0,
            platform: 'mp'
        });
    }
    cancelClick() {
        const { dispatch } = this.props;
        dispatch(toggleDialog('hide'));
        this.setState({
            slideClass: 'origin-slide-pre',
            index: 0,
            platform: 'mp'
        });
    }
    closeClick() {
        const { dispatch } = this.props;
        dispatch(toggleDialog('hide'));
        this.setState({
            slideClass: 'origin-slide-pre',
            index: 0,
            platform: 'mp'
        });
    }
    render () {
        const { dispatch } = this.props;
        let that = this;
        return (
            <div>
                <Dialog toggleStatus={this.props.toggleStatus.status}>
                    <div className="modal-dialog">
                        <div className="dialog-content">
                            <div className="dialog-header">
                                <div>
                                    <span className="t-dialog-close" onClick={this.closeClick.bind(this)}>&#10006;</span>
                                </div>
                                <div className='nav_arrow'>
                                    <span className={"left" + (this.state.index === 0 ? " current" : "")}>
                                        原创声明须知
                                    </span>
                                    <span className={"right" + (this.state.index === 1 ? " current" : "")}>
                                        原创声明信息
                                    </span>
                                </div>
                            </div>
                            <div className="dialog-body">
                                <div className={this.state.slideClass}>
                                    <div className="origin-notice">
                                        <p>
                                            原创声明功能适用的内容是指作者独立完成创作的作品。
                                        </p>
                                        <p>
                                            头条号会对申请原创声明的文章进行审核，审核通过后的文章会被打上原创的声明。如果有作者抄袭带有原创声明的文章，头条号会为抄袭的文章带上转载的标记。
                                        </p>
                                        <p className="space-blank">
                                            如下情形不得为文章申请原创声明，一经发现将永久收回原创功能使用权限，造成严重负面影响的头条号可能被禁言甚至封号。
                                        </p>
                                        <p className="space-blank">
                                            1. 大篇幅引用他人作品或文章主要内容为他人作品、整合的内容、甚至是完全抄袭的内容；
                                        </p>
                                        <p>
                                            2. 文章主要篇幅为诸如“法律、法规，国家机关的决议、决定、命令和其他具有立法、行政、司法性质的文件、时事新闻、历法、通用数表、通用表格和公式”等的公共内容；
                                        </p>
                                        <p>
                                            3. 带有营销性质的内容；
                                        </p>
                                        <p>
                                            4. 非独家代理的内容；
                                        </p>
                                        <p>
                                            5. 色情低俗、暴力、谣言等内容；
                                        </p>
                                        <p>
                                            6. 违反法律法规、政策及公序良俗、社会公德的内容；
                                        </p>
                                        <p>
                                            7. 干扰头条号正常运营和侵犯其他作者合法权益的内容；
                                        </p>
                                        <p className="space-blank">
                                            头条号鼓励用户发表原创文章，尊重原创作者的权益。
                                        </p>
                                        <div className="edit-btns">
                                            <Button className="btns cancel-btn" HandleClick={this.cancelClick.bind(this)}>取消</Button>
                                            <Button className="btns next-btn" HandleClick={this.nextHandleClick.bind(this)}>下一步</Button>
                                        </div>
                                    </div>
                                    <div className="origin-content">
                                        <ul className="apply_create_form">
                                            <li>
                                                <label>头条号首发</label>
                                                <div className="edit-input apply_create_first">
                                                    <div className={"form1_checkbox" + (this.state.platform === "mp" ? " checked" : "")} onClick={this.mpClick.bind(this)}>首发</div>
                                                </div>
                                                <div className={ "form1_checkbox" + (this.state.platform === "other" ? " checked" : "") } onClick={this.otherClick.bind(this)}>非首发</div>
                                            </li>
                                            <li className={ "origin_mp" + (this.state.platform === "mp" ? " origin_active" : "") }>
                                                <label>平台名称</label><input data-name="debut_mp" type="text" />
                                            </li>
                                            <li className={ "origin_mp" + (this.state.platform === "mp" ? " origin_active" : "") }>
                                                <label>作者</label><input data-name="debut_author" type="text" />
                                            </li>

                                            <li className={ "origin_other" + (this.state.platform === "other" ? " origin_active" : "") }>
                                                <label>首发链接</label><input data-name="debut_url" type="text" placeholder="文章首发平台链接" />
                                            </li>
                                            <li className={ "origin_other" + (this.state.platform === "other" ? " origin_active" : "") }>
                                                <label>首发平台</label><input data-name="debut_platform" type="text" placeholder="文章首发平台名称" />
                                            </li>
                                            <li className={ "origin_other" + (this.state.platform === "other" ? " origin_active" : "") }>
                                                <label>作者名称</label><input data-name="debut_other_author" type="text" placeholder="在该平台的作者名称" />
                                            </li>
                                        </ul>
                                        <div className="edit-btns">
                                            <Button  className="btns pre-btn" HandleClick={this.preHandleClick.bind(this)}>上一步</Button>
                                            <Button  className="btns ok-btn" HandleClick={this.okClick.bind(this)}>确定</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

function stateMapToProps(state) {
    return {
        toggleStatus: state.origin
    };
}

export default connect(stateMapToProps)(Origin);