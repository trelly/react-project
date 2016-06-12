/**
 * @file Timed.jsx
 */
import React, { Component, PropTypes } from 'react'
import Dialog from 'react-bootstrap'

class Timed extends Component {
    render() {
        const value = this.props.value
        return (
            <div>
                this is a timed publish input-box!
            </div>
        )
    }
}

export default Timed