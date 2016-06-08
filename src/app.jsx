import React from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';

const App = React.createClass({
    handleEditorChange(e) {
        console.log('Content was updated:', e.target.getContent());
    },

    render() {
        return (
            <TinyMCE
                content="<p>This is the initial content of the editor</p>"
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
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('container'));