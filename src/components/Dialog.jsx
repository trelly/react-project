/**
 * @file Dialog.jsx
 * @desc 弹窗组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Dialog extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            steps: this.props.steps
        };
    }
    next() {
        this.setState({step: this.state.step + 1})
    }
    pre() {
        this.setState({step: this.state.step - 1})
    }
    render() {
        const status = classNames({
            show: this.props.show,
            hide: this.props.show}
        )
        return (
            <div>
                <ul>
                    {
                        React.Children.map(this.props.children, (child, index) => {
                            if (this.state.current == index) {
                                return <li className={status} show="{true}">{child}</li>
                            }
                        })
                    }
                </ul>
                <div>
                    <button onClick={this.pre.bind(this)}>上一步</button>
                    {this.state.steps == this.state.current ? <button onClick={this.next.bind(this)}>下一步</button> : null}
                </div>
            </div>
        )
    }
}

Wizard.propTypes = {
    onFinish: PropTypes.func,
    steps: 2
}

export default Wizard