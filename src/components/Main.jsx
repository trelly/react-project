import React, { Component, PropTypes } from 'react'
import TinyMCE from 'react-tinymce';

class Main extends Component {

    handleEditorChange(e) {
        console.log('Content was updated:', e.target.getContent());
    }

    render() {
        const value = this.props.value;
        return (
            <div>
                <Title/>
                <TinyMCE
                    content=""
                    config={{
                    plugins: "textpattern, image, link, media, preview, anchor, autosave",
                    language: "zh_CN",
                    menubar: false,
                    toolbar: ['undo redo | bold underline | blockquote bullist numlist alignleft aligncenter alignright', 'link image media | preview'],
                    autosave_ask_before_unload: true,
                    autosave_interval: "5s",
                    height: '80%'
                }}
                    onChange={this.handleEditorChange}
                />
            </div>
        )
    }
}

export default Cover