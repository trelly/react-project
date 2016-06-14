import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import article from './article'

const rootReducer = combineReducers({
    form: formReducer,
    article
})

export default rootReducer