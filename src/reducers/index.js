import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import articleReducer from './article'
import menuReducer from './menu'

const rootReducer = combineReducers({
    form: formReducer,
    article: articleReducer,
    menu: menuReducer
})

export default rootReducer