import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'

class Notification extends Component {
    render() {
        const value = this.props.value;
        return (
            <div>
                <Modal>this is notification set</Modal>
            </div>
        )
    }
}

export default Notification