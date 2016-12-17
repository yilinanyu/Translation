import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import App from './components/app'
import reducers from './reducers'

export const store = createStore(reducers, window.initialReduxState, applyMiddleware(thunk))

// Attaching myApp  to window object
window.myApp = (opts) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.querySelector('#'+ opts.elId))
}