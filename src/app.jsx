import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'

import Wizard from './components/Wizard.jsx'
import ArticleForm from './containers/ArticleForm.jsx'
import Toast from './components/Toast.jsx'
import Dialog from './components/Dialog.jsx'
import { saveArticle } from './actions'

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
                <ArticleForm onSubmit={data=>store.dispatch(saveArticle(data))}/>
            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('container'));