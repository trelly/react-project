import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import articleReducer from './article'
import menuReducer from './menu'
import mediaReducer from './media'
import originReducer from './origin'

const rootReducer = combineReducers({
    form: formReducer,
    article: articleReducer,
    menu: menuReducer,
    media: mediaReducer,
    origin: originReducer
})

export default rootReducer