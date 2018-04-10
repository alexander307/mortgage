import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
//ToDo real redusers
// import { mainReducer } from './reducers' 

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

/* fake data */
import CalculatorReducer from './reducers/CalculatorReducer';
import logo from './logo.svg' //drop this govno import

/* TODO init store by reducers */
let store = createStore(
    CalculatorReducer
)

render(
    <Provider store = {store} >
        <App logo = {logo} />
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker();

