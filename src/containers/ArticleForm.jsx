import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TinyMCE from 'react-tinymce'
import { Form, Tab, Tabs, Button, Col, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap'
import DateTimeField from 'react-bootstrap-datetimepicker'

export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]
export const timeFormat = {
    date: "1990-06-05",
    format: "YYYY-MM-DD",
    inputFormat: "YYYY/MM/DD",
    mode: "date"
};

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
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="设置">
                            <Button bsStyle="primary">原创</Button>
                                <FormGroup controlId="formControlsSelect">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        广告
                                    </Col>
                                    <Col sm={9}>
                                        <Radio checked readOnly>
                                            展示广告
                                        </Radio>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControlsSelect">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        分类
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="select" placeholder="请选择">
                                            <option value="select">select</option>
                                            <option value="other">...</option>
                                        </FormControl>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col componentClass={ControlLabel}>定时发送</Col>
                                    <DateTimeField
                                        dateTime={timeFormat.date}
                                        format={timeFormat.format}
                                        viewMode={timeFormat.mode}
                                        inputFormat={timeFormat.inputFormat}
                                    />
                                </FormGroup>
                        </Tab>
                        <Tab eventKey={2} title="功能">Tab 2 content</Tab>
                        <Tab eventKey={3} title="模板" disabled>Tab 3 content</Tab>
                    </Tabs>
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
