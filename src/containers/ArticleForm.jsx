import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]
import TinyMCE from 'react-tinymce'

class SimpleForm extends Component {
    render() {
        const {
            fields: { firstName, lastName, email, sex, favoriteColor, employed, notes },
            handleSubmit,
            resetForm,
            submitting,
            content,
            setContent
        } = this.props
        return (<form onSubmit={handleSubmit}>
                <div className="pgc-content">
                    <TinyMCE {...content}
                        content={content}
                        config={{
                            plugins: "textpattern, image, link, media, preview, anchor, autosave",
                            menubar: false,
                            toolbar: ['undo redo | bold underline | blockquote bullist numlist alignleft aligncenter alignright', 'link image media | preview'],
                            autosave_restore_when_empty: false,
                            autosave_ask_before_unload: true,
                            autosave_interval: "5s",
                            height: '500px'
                    }}/>
                </div>
                <div className="pgc-slider">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation">
                            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">设置</a></li>
                        <li role="presentation" className="active">
                            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">功能</a></li>
                        <li role="presentation">
                            <a href="#template" aria-controls="template" role="tab" data-toggle="tab">模板</a></li>
                    </ul>
                    <div className="tab-content pgc-tab-content">
                        <div role="tabpanel" className="tab-pane" id="settings">设置
                        </div>
                        <div role="tabpanel" className="tab-pane active" id="profile">
                        </div>
                        <div role="tabpanel" className="tab-pane active" id="template">
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

SimpleForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}

export default reduxForm({
    form: 'simple',
    fields
})(SimpleForm)
