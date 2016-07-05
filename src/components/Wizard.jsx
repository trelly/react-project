/**
 * @file Wizard.jsx
 * @desc 向导组件
 */
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Button from './Button.jsx'

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    next() {
        this.setState({current: this.state.current + 1})
    }
    pre() {
        this.setState({current: this.state.current - 1})
    }
    onFinish(e) {
        e.preventDefault()
        this.props.onFinish.call(this, this.state.data, e)
    }
    render() {
        const { steps, onFinish } = this.props
        return (
            <div>
                <ul>
                    {
                        React.Children.map(this.props.children, (child, index) => {
                            if (this.state.current == index) {
                                return <li show={true}>{child}</li>
                            }
                        })
                    }
                </ul>
                <div>
                    {this.state.current != 0 ? <button onClick={this.pre.bind(this)}>上一步</button> : null}
                    {steps != this.state.current ? <button onClick={this.next.bind(this)}>下一步</button> : <button onClick={this.onFinish.bind(this)}>确定</button>}
                </div>
            </div>
        )
    }
}

Wizard.propTypes = {
    onFinish: PropTypes.func,
    steps: PropTypes.string.isRequired
}

export default Wizard