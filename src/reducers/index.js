import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import articleReducer from './article'
import menuReducer from './menu'
import mediaReducer from './media'
import dialogReducer from './dialog'

const rootReducer = combineReducers({
    form: formReducer,
    article: articleReducer,
    menu: menuReducer,
    media: mediaReducer,
    dialog: dialogReducer
})

export default rootReducer