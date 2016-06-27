import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'

import Header from './containers/Header.jsx'
import MenuSlider from './containers/Slider.jsx'

import reducer from './reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, promise, logger)
);

class App extends Component {
    showToast() {
        this.refs.myToast.show();
    }
    showDialog() {
        this.refs.myDialog.show();
    }
    render() {
        return (
            <div>
                <Header></Header>
                <MenuSlider tab="1"></MenuSlider>
            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('container'));