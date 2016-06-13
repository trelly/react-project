import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title.jsx'
import { Button } from 'react-bootstrap'
import Category from './components/Category.jsx'
import Original from './components/Original.jsx'
import {} from 'redux'

const App = React.createClass({
    render() {
        return (
            <div>
                <Title value="this is a input"></Title>

                <Category list={['新闻', '娱乐']} />
                <Original show={true}/>
                <Button className="btn btn-primary">存草稿</Button>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('container'));