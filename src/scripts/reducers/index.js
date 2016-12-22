import { combineReducers } from 'redux'

import headerReducer from './reducer_header'
import counterReducer from './reducer_counter'
import environmentReducer from './reducer_environment'
import marketingPageReducer from './reducer_marketingPage'
import localesReducer from './reducer_locales'
import resultReducer from './reducer_result'


const rootReducer = combineReducers({
    header: headerReducer,
    counter:  counterReducer,
    environment: environmentReducer,
    marketingPages: marketingPageReducer,
    locales: localesReducer,
    result: resultReducer
})

export default rootReducer
