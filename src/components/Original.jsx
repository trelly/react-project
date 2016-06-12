import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'

class Original extends Component {
    render() {
        return (
            <div show={this.props.show}>
                <Modal>this is modal</Modal>
            </div>
        )
    }
}

export default Original