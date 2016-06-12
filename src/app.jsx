import React from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';
import Title from './components/Title.jsx'
import { Button } from 'react-bootstrap'
import Category from './components/Category.jsx'
import Original from './components/Original.jsx'
import {} from 'redux'

const App = React.createClass({
    handleEditorChange(e) {
        console.log('Content was updated:', e.target.getContent());
    },

    render() {
        return (
            <div>
                <Title value="this is a input"></Title>
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
                <Category list={['新闻', '娱乐']} />
                <Original show={true}/>
                <Button className="btn btn-primary">存草稿</Button>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('container'));