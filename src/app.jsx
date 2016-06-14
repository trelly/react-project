import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'

import Wizard from './components/Wizard.jsx'
import SimpleForm from './containers/ArticleForm.jsx'
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
    render() {
        return (
            <div>
                <Wizard steps="2" onFinish={e=>console.log(e)}>
                    <div>
                        <div>title1</div>
                        <div>content1</div>
                    </div>
                    <div>
                        <div>title2</div>
                        <div>content2</div>
                    </div>
                </Wizard>
                <SimpleForm onSubmit={data=>store.dispatch(saveArticle(data))}/>
            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('container'));