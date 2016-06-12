import React, { Component, PropTypes } from 'react'

class Button extends Component {
    render() {
        const value = this.props.value;
        return (
            <input type="text" name="title" defaultValue="标题(5-30)" className="mce-fieldset-title"/>
        )
    }
}

Title.propTypes = {
    value: PropTypes.string.isRequired
}

export default Title