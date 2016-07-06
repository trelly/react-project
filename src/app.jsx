import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'

import Header from './containers/Header.jsx'
import Slider from './containers/Slider.jsx'
import Content from './containers/Content.jsx'
import Origin from './containers/Origin.jsx'

import reducer from './reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {fetchMediaPosts, fetchUserPosts} from './actions'
import './static/css/component.css'

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, promise, logger)
);

store.dispatch(fetchMediaPosts()).then(() =>
    console.log(store.getState())
)

store.dispatch(fetchUserPosts()).then(() =>
    console.log(store.getState())
)

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Origin />
                <Header></Header>
                <Slider></Slider>
                <Content></Content>
            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('container'));
