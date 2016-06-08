import React, { Component, PropTypes } from 'react'

class Title extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value } = this.props
        return (
            <input type="text" name="title" value={value} className="mce-fieldset-title"/>
        )
    }
}

Title.propTypes = {
    value: PropTypes.string.isRequired
}

export default Title