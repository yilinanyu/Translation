import { combineReducers } from 'redux'

import headerReducer from './reducer_header'
import counterReducer from './reducer_counter'
import environmentReducer from './reducer_environment'
import marketingpageReducer from './reducer_marketingpage'
import localesReducer from './reducer_locales'
import resultReducer from './reducer_result'


const rootReducer = combineReducers({
    header: headerReducer,
    counter:  counterReducer,
    environment: environmentReducer,
    marketingpage: marketingpageReducer,
    locales: localesReducer,
    result: resultReducer
})

export default rootReducer
